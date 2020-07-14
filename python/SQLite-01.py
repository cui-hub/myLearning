import sqlite3

#连接到数据库
#数据库文件是test.db
#如果文件不存在，自动在当前目录创建

conn = sqlite3.connect('test.db')

#创建一个cursor
cursor = conn.cursor()

#执行一条SQL语句，创建user表
#cursor.execute('create table user(id varchar (20) primary key,name varchar (20))')

#继续执行SQL语句，插入一条记录：
#cursor.execute('insert into user (id,name ) values (\'1\',\'Michale\')')

#print(cursor.rowcount)

cursor.close()

conn.commit()

conn.close()

connect = sqlite3.connect('test.db')
cursor = connect.cursor()
cursor.execute('select * from user where id =?',('1',))
values = cursor.fetchall()

print(values)
cursor.close()
connect.close()

