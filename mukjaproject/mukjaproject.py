from flask import Flask, render_template, request
import mariadb
import sys
import os

from python.add_tag import add_tag_link     # add_tag_link(store_id, tag_name)
from python.get_ import get_conn, get_tag, get_img
# get_tag(store_id), get_img(store_id)


app = Flask(__name__)


@app.route("/")
def intro():
    return render_template('intro.html')

@app.route("/home")
def main():
    conn = get_conn()
    cur = conn.cursor()

    information=[]
    cur.execute("SELECT store_id, thumbnail, name, rate, distance FROM store ORDER BY rate DESC")
    for i in cur:
        information.append(i)

    tag_list = []
    cur.execute("SELECT tag_id, tag_name FROM tag")
    for tag in cur:
        tag_list.append(tag)

    dict_tag = {}
    cur.execute('select store_id, tag_id from tag_link')
    for (store_id, tag_id) in cur:
        if store_id in dict_tag:
            dict_tag[store_id].append(tag_id)
        else:
            dict_tag[store_id] = [tag_id]

    conn.close()
  
    return render_template('main.html',\
         inform=information, dict_tag=dict_tag, tag_list=tag_list)

 
@app.route("/store/<int:store_id>/")
def store_detail(store_id):
    conn = get_conn()
    cur = conn.cursor()

    information = []
    cur.execute("SELECT store_id, name, address, rate, inform, writer, post_date FROM store WHERE store_id=?", (store_id,))
    for i in cur:
        information.append(i)
    conn.close()

    return render_template('store_detail.html',\
        information=information,\
        tags=get_tag(store_id),\
        imgs=get_img(store_id))



@app.route("/map/")
def map():
    conn = get_conn()
    cur = conn.cursor()

    location = []
    cur.execute("select name, lat, lon from store")
    for loc in cur:
        location.append(loc)

    return render_template("map.html", location=location)


@app.route("/about-us/")
def about_us():
    return render_template("about_us.html")


@app.route("/admin/")
def admin():
    conn = get_conn()
    cur = conn.cursor()

    info_store = []
    cur.execute("select store_id, name, thumbnail from store")
    for (store_id, name, thumbnail) in cur.fetchall():
        info_store.append((store_id, name, thumbnail))
    conn.close()
    return render_template("admin.html", info_store=info_store)


allowed = [\
    'jpg', 'peg', 'fif', 'gif', 'png', 'ppm', 'pgm', 'pbm', 'pnm', 'svg', 'bmp',\
    'JPG', 'PEG', 'FIF', 'GIF', 'PNG', 'PPM', 'PGM', 'PBM', 'PNM', 'SVG', 'BMP'\
    ]
@app.route("/admin/add_store" , methods=('POST',))
def add_store():
    name = request.form['store_name']
    rate = request.form['store_rate']
    address = request.form['address']
    lat = request.form['lat']
    lon = request.form['lon']
    inform = request.form['inform']
    writer = request.form['writer']
    file = request.files['thumbnail']
    filename = file.filename
    if filename[-3:] not in allowed:
        return "지원하지 않은 이미지 형식입니다."
    file.save(os.path.join('static/img/thumb', filename))
    distance = request.form['distance']
    pwd = request.form['pwd']

    conn = get_conn()
    cur = conn.cursor()

    if pwd != "0000":
        conn.close()
        return "password wrong!"
    elif pwd == "0000":
        cur.execute("select name from store")
        for store_name in cur.fetchall():
            if name in store_name:
                conn.close()
                return "already exist"
        cur.execute(f"insert into store\
            (name, rate, address,\
            lat, lon, inform,\
            writer, thumbnail, distance)\
            values('{name}',{rate},'{address}',{lat},{lon},\
            '{inform}','{writer}','{file.filename}',{distance})")

        cur.execute("select * from store where store_id=(select max(store_id) from store)")
        show_output = ""
        for out in cur.fetchall():
            show_output += str(out)
        show_output += "<a href='/'>home</a>"
        show_output += "<a href='/admin/'>back to admin</a>"
        conn.commit()
        conn.close()

        return show_output


@app.route("/admin/add_image", methods=('POST',))
def add_image():
    from python.image_commit import execute_image_commit
    password = request.form['pwd']
    store_id = request.form['store_id']
    store_order = request.form['store_order']
    if password != '0000':
        return "password is wrong"
    elif password == '0000':
        file = request.files['detail_image']
        filename = file.filename
        index_of_dot = filename.index('.')
        if filename[-3:] not in allowed:
            return "지원하지 않은 이미지 형식입니다."
        filename = f"d{store_id}_{store_order}" + filename[index_of_dot:]
        file.save(os.path.join('static/img/details', filename))
        execute_image_commit()
        return "img file added"

@app.route("/admin/store_data/<int:store_id>/")
def store_edit(store_id=0):
    conn = get_conn()
    cur = conn.cursor()
    
    store_info = []
    cur.execute("select * from store where store_id=?", (store_id,))
    # 0:store_id, 1:name, 2:rate, 3:address, 4:lon, 5:inform, 6:post_date,
    # 7:writer, 8:thumbnail, 9:distance
    for info in cur.fetchall():
        store_info.append(info)

    tag_list = []
    cur.execute("select * from tag")
    for (tag_id, tag_name) in cur.fetchall():
        tag_list.append((tag_id, tag_name))

    conn.close()
    return render_template("store_edit.html",\
         info=store_info, tags=get_tag(store_id), tag_list=tag_list)

@app.route("/admin/store_edit/<int:store_id>/", methods=('POST',))
def execute_store_edit(store_id=0):
    conn = get_conn()
    cur = conn.cursor()

    store_name = request.form['store_name']
    rate = request.form['rate']
    address = request.form['address']
    lat = request.form['lat']
    lon = request.form['lon']
    inform = request.form['inform']
    writer = request.form['writer']
    distance = request.form['distance']
    print(store_name, rate, address, lat, lon, inform, writer, distance)
    pwd = request.form['pwd']
    if pwd == "0000":
        cur.execute(f"update store set name='{store_name}', rate={rate},\
            address='{address}', lat={lat}, lon={lon}, inform='{inform}',\
            writer='{writer}', distance={distance}\
            where store_id = ?", (store_id,))
        conn.commit()
    else:
        return "wrong password"
    print("update database")
    submit_clicked = "submitted"
    submit_clicked += "<a href='/'>go home</a>"
    conn.close()
    return submit_clicked

@app.route("/admin/add_tag/<int:store_id>/", methods=('POST',))
def add_tag(store_id=0):

    pwd = request.form['pwd']
    tag_id = request.form['tag_id']
    conn = get_conn()
    cur = conn.cursor()
    if pwd == "0000":
        cur.execute("insert into tag_link(store_id, tag_id) values(?, ?)", (store_id, tag_id))
        conn.commit()
    else:
        return "wrong password"
    
    return "tag added"


if __name__ == "__main__":
    app.run(host='0.0.0.0')
