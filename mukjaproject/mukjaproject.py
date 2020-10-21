from flask import Flask, render_template, request
import mariadb
import sys

from python.add_tag import add_tag_link     # add_tag_link(store_id, tag_name)
from python.get_ import get_conn, get_tag, get_img
# get_tag(store_id), get_img(store_id)


app = Flask(__name__)

@app.route("/")
def main():

    conn = get_conn()
    cur = conn.cursor()

    information=[]
    cur.execute("SELECT store_id, thumbnail, name, rate FROM store")
    for i in cur:
        information.append(i)

    dict_tag = {}
    cur.execute('select store_id, tag_id from tag_link')
    for (store_id, tag_id) in cur:
        if store_id in dict_tag:
            dict_tag[store_id].append(tag_id)
        else:
            dict_tag[store_id] = [tag_id]

    print(dict_tag)
    conn.close()
  
    return render_template('main.html', inform=information, dict_tag = dict_tag)


 
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
