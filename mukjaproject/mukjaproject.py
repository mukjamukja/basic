from flask import Flask, render_template, request
import mariadb
import sys
app = Flask(__name__)

# Connect to MariaDB Platform
def get_conn():
    try:
        conn = mariadb.connect(
            user="ubuntu",
            password="0625",
            host="193.123.250.119",
            port=3306,
            database="mukja_db"
        )
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)
    return conn


@app.route("/")
def main():
    information=[]
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT id, name, rate, tag FROM store")
    for i in cur:
        information.append(i)
    conn.close()
    return render_template('main.html', inform=information)

@app.route("/store/<int:store_id>/")
def store_detail(store_id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT id, name, loc, address, tag, rate, inform FROM store WHERE id=?", (store_id,))
    information = []
    for i in cur:
        information.append(i)

    return render_template('store_detail.html', information=information)

@app.route("/practice")
def practice():
    return render_template('practice.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0')
