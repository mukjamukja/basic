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
            host="localhost",
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

@app.route("/reporter/<int:id>/")
def reporter(id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT nick_name, part, reg_date, email, phone FROM reporter WHERE r_id=?", (id,))
    return render_template('reporter.html', cur=cur)

@app.route("/reporter_list")
def reporter_list():
    value = []
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT nick_name, r_id FROM reporter")

    return render_template('reporter_list.html', cur=cur)


if __name__ == "__main__":
    app.run(host='0.0.0.0')
