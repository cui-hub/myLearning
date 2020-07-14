from pymysql import *

class JD(object):
    def __init__(self):
        self.conn = connect(host='localhost', port=3306, user='root', password='', database='jing_dong', charset='utf8')
        self.cursor = self.conn.cursor()

    def __del__(self):
        self.cursor.close()
        self.conn.close()

    def execute_sql(self,sql):
        self.cursor.execute(sql)
        for temp in self.cursor.fetchall():
            print(temp)

    def show_all_iterms(self):
        '''展示所有商品'''
        sql='select * from goods;'
        self.execute_sql(sql)

    def show_cates(self):
        '''展示所有商品分类'''
        sql='select name from goods_cates;'
        self.execute_sql(sql)

    def show_brands(self):
        '''展示所有商品分类'''
        sql='select name from goods_brands;'
        self.execute_sql(sql)

    def add_brands(self):
        iterm_name=input('请输入品牌名：')
        sql='''insert into goods_brands(name) values ('%s')'''%iterm_name
        self.cursor.execute(sql)
        self.conn.commit()
        print('品牌成功添加到数据库！')
    def show_name(self):
        iterm_name = input('请输商品名：')
        # sql = "select * from goods where name ='%s'" %iterm_name 这种构建方式容易被注入
        sql = "select * from goods where name=%s"
        self.cursor.execute(sql,[iterm_name]) # 用列表让execute自动替换%s可以防止注入
        for i in self.cursor.fetchall():
            print (i)
    def registion(self):
        while True:
            user_name=input('用户名：')
            user_address=input('地址：')
            user_tel=input('联系方式：')
            user_passwd=input('密码：')
            user_passwd_conformatiom=input('确认密码：')
            if user_passwd == user_passwd_conformatiom:
                sql="insert into customers values (0,%s,%s,%s,%s)"
                self.cursor.execute(sql,[user_name,user_address,user_tel,user_passwd])
                self.conn.commit()
                print('注册成功！')
                break
            else:
                print('两次密码不一致，请重新输入！')

    def is_registed(self):
        user_name=input('请输入用户名：')
        pass_word = input('请输入密码：')
        if self.cursor.execute("select * from customers where name='%s' and passwd='%s'"%(user_name,pass_word))!=0:
            # 已经注册过，并登陆成功
            print('登陆成功！')
        else:
            print('您还没有注册，请先注册：')
            self.registion()

    @staticmethod  #静态方法
    def print_manu():
        print('----京东----')
        print('1：所有商品')
        print('2：所有商品分类')
        print('3：所有商品的品牌分类')
        print('4: 添加一个品牌：')
        print('5：查询具体商品信息')
        print('0：退出')
        return input('请输入对应功能序号：')

    def run(self):
        # 先判断是否注册过
        self.is_registed()
        while True:
            num=self.print_manu()
            if num =='1':
                self.show_all_iterms()
            elif num =='2':
                self.show_cates()
            elif num=='3':
                self.show_brands()
            elif num=='4':
                self.add_brands()
            elif num =='0':
                break
            elif num=='5':
                self.show_name()
            else:
                print('输入有误，请重新输入。。。')

def main():
    jd = JD()
    jd.run()




if __name__=='__main__':
    main()