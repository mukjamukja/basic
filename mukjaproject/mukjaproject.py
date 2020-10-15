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


@app.route("/")
def main():
    information=[]
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT store_id, name, rate FROM store")
    for i in cur:
        information.append(i)
    conn.close()
    return render_template('main.html', inform=information)

@app.route("/store/<int:store_id>/")
def store_detail(store_id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT store_id, name, address, rate, inform FROM store WHERE store_id=?", (store_id,))
    information = []
    for i in cur:
        information.append(i)

    
    return render_template('store_detail.html', information=information, tag=tag)

@app.route("/practice")
def practice():
    return render_template('practice.html')

@app.route("/map.html/")
def map():
    return render_template("map.html")
   

if __name__ == "__main__":
    app.run(host='0.0.0.0')
