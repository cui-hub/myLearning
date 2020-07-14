from pymysql import *

conn = connect(host='localhost',port=3306,database='jing_dong',user='root',password='',charset='utf8')
cs = conn.cursor()
count=cs.execute('insert into goods_cates values (0,"硬盘")')
print(count)
conn.commit() # commit 后，sql语句立即生效，无法撤销
cs.execute('insert into goods_cates values (0,"硬盘2")')
conn.rollback() # 撤销，没太大用
cs.close()
conn.close()
