# /static/img/details/ 경로에 디테일 사진추가시 사진파일 이름은 d[store_id]_[order].png 형식으로 해주세요
# ex) 'd1_3.png'
import os
import mariadb


def get_from_dir():
    file_names = os.listdir('../static/img/details')
    list_file_name = []
    for file_name in file_names:
        list_file_name.append(file_name)
    return list_file_name

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

def get_from_db():
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT img_name FROM image")
    list_images = []
    for image in cur.fetchall():
        list_images.append(image[0])
    conn.close()
    return list_images

if __name__ == "__main__":
    print(get_from_dir())
    print('=' * 50)
    print(get_from_db())

    img_files = get_from_dir()
    img_dbs = get_from_db()
    print('=' * 50)

    for img_file in img_files:
        if img_file not in img_dbs:
            index_of_underbar = img_file.index('_')
            value_store_id = img_file[1:index_of_underbar]
            value_img_name = img_file
            value_img_order = img_file[index_of_underbar+1:index_of_underbar+2]
            conn = get_conn()
            cur = conn.cursor()
            cur.execute("INSERT INTO image(store_id, img_name, img_order)\
                    values(?, ?, ?)",\
                    (value_store_id, value_img_name, value_img_order))
            conn.commit()
