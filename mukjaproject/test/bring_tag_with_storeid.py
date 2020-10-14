import mariadb


# Connect to MariaDB Platform
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
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)
    return conn
store_id = 1
conn = get_conn()
cur = conn.cursor()
cur.execute(' select tag_name from tag where tag_id in (select tag_id from tag_link where store_id = ?);',(store_id,))
for i in cur:
    print(i)
print("=" * 50)
cur.execute('select name from store where store_id=?',(store_id,))
for i in cur:
    print(i)
conn.close()
