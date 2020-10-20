from flask import Flask, render_template, request
import mariadb
import sys
app = Flask(__name__)

# connect to mariadb platform
def get_conn():
    try:
        conn = mariadb.connect(
            user="ubuntu",
            password="0625",
            host="193.123.250.119",
            port=3306,
            database="mukja_db2"
        )
    except mariadb.Error as e:
        print(f"error connecting to mariadb platform: {e}")
        sys.exit(1)
    return conn

def get_tag(store_id=0):
    """
    input:  스토어 아이디
    return: 아이디에 해당되는 태그들 모두
    """
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT tag_name FROM tag WHERE tag_id in (SELECT tag_id FROM tag_link WHERE store_id = ?);", (store_id,))
    tags = []
    for t in cur:
        tags.append(t)
    return tags

def get_img(store_id=0):
    """
    input: 스토어 아이디
    return:  스토어 아이디에 해당되는 사진들 모두 (사진이름, 순서)
    """
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT img_name, img_order FROM image WHERE store_id=? ORDER BY img_order ASC", (store_id,))
    imgs = []
    for (img_name, img_order) in cur:
        imgs.append((img_name, img_order))
    return imgs


@app.route("/")
def main():
    information=[]

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("SELECT store_id, thumbnail, name, rate FROM store")
    for i in cur:
        information.append(i)
    conn.close()
  
    return render_template('main.html', inform=information)


 
@app.route("/store/<int:store_id>/")
def store_detail(store_id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT store_id, name, address, rate, inform, writer, post_date FROM store WHERE store_id=?", (store_id,))
    information = []
    for i in cur:
        information.append(i)
    conn.close()

    return render_template('store_detail.html',\
        information=information,\
        tags=get_tag(store_id),\
        imgs=get_img(store_id))

@app.route("/practice")
def practice():
    return render_template('practice.html')

@app.route("/map.html/")
def map():
    return render_template("map.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0')
