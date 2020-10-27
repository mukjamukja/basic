from flask import Flask, render_template, request
import mariadb
import sys
import os

from python.add_tag import add_tag_link     # add_tag_link(store_id, tag_name)
from python.get_ import get_conn, get_tag, get_img
# get_tag(store_id), get_img(store_id)


app = Flask(__name__)


@app.route("/")
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
  
    return render_template('main.html', inform=information, dict_tag=dict_tag, tag_list=tag_list)

 
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


@app.route("/practice/")
def practice():
    return render_template('practice.html')


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
    return render_template("admin.html")


allowed = ['jpg', 'peg', 'fif', 'gif', 'png', 'ppm', 'pgm', 'pbm', 'pnm', 'svg', 'bmp', 'JPG', 'PEG', 'FIF', 'GIF', 'PNG', 'PPM', 'PGM', 'PBM', 'PNM', 'SVG', 'BMP']  
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
        return "password wrong!"
    elif pwd == "0000":
        cur.execute("select name from store")
        for store_name in cur.fetchall():
            if name in store_name:
                return "already exist"
        cur.execute("insert into store\
            (name, rate, address,\
            lat, lon, inform,\
            writer, thumbnail, distance) values(?,?,?,?,?,?,?,?,?)",\
            (name, rate, address, lat, lon, inform,\
            writer, file.filename, distance))

        cur.execute("select * from store where store_id=(select max(store_id) from store)")
        show_output = ""
        for out in cur.fetchall():
            show_output += str(out)
        show_output += "<a href='/'>home</a>"
        show_output += "<a href='/admin/'>back to admin</a>"
        conn.commit()

        return show_output


@app.route("/admin/add_image", methods=('POST',))
def add_image():
    from python.image_commit import execute_image_commit
    password = request.form['pwd']
    if password != '0000':
        return "password is wrong"
    elif password == '0000':
        file = request.files['detail_image']
        filename = file.filename
        if filename[-3:] not in allowed:
            return "지원하지 않은 이미지 형식입니다."
        file.save(os.path.join('static/img/details', filename))
        execute_image_commit()
        print('db updated')
        return 'file added'


if __name__ == "__main__":
    app.run(host='0.0.0.0')
