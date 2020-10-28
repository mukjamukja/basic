import mariadb
from python.add_tag import add_tag_link     # add_tag_link(store_id, tag_name)
from python.get_ import get_conn, get_tag, get_img

conn = get_conn()
cur = conn.cursor()

cur.execute("select name from store")
for store_name in cur.fetchall():
    print(store_name)
    if '스시오' in store_name:
        print('*' * 100)