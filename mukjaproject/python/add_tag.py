import mariadb
import sys
from python.get_ import get_conn


def add_tag_link(id_store=0, name_tag=""):
    conn = get_conn()
    cur = conn.cursor()

    cur.execute(f"select tag_id from tag\
        where tag_name like('%{name_tag}%')")

    cur_tag_id = cur.fetchall()
    try:
        tag_id = int(cur_tag_id[0][0])
        cur.execute("select * from tag_link where\
            store_id=? and tag_id=?", (id_store, tag_id))

        cur_exist = cur.fetchall()
        if cur_exist==[]:
            cur.execute("insert into tag_link(store_id, tag_id)\
                values(?, ?)",(id_store, tag_id))
            conn.commit()
            print(f"link store_id: {id_store} - tag_id: {tag_id} added")
        else:
            print("link already exist")
    except IndexError as error:
        print(f"{error} tag {name_tag} not exist")


if __name__ == "__main__":
    add_tag_link(id_store=6, name_tag="분식")