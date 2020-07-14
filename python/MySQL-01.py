# 开始————>创建connection——>获取cursor——>执行查询、执行命令、获取数据、处理数据——>关闭cursor——>关闭connection——>结束


from pymysql import *
def main():
    # 创建connection连接
    conn = connect(host='localhost',port=3306,user='root',password='',database='jing_dong',charset='utf8')
    # 获得cursor对象
    cs1=conn.cursor()
    count=cs1.execute('select id,name from goods where id=100;')
    # execute返回生效的行数
    print('查询到%s条数据：'%count)
    # print(cs1.fetchone()) 取游标到达的一条信息
    # print(cs1.fetchmany(5)) 取多条信息（规定数量）
    # print(cs1.fetchall())  取所有信息
    for i in range(count):
        result=cs1.fetchone()
        print('第%s条数据：'%(i+1) )
        print(result)
    cs1.close()
    conn.close()






if __name__=='__main__':
    main()