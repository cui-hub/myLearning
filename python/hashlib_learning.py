import hashlib,random
data = 'how to use md5 in python hashlib?'.encode('utf-8')
print(data)
md5 = hashlib.md5()
md5.update(data)
print(md5.hexdigest())
print('---------------------------------------------------')
md5.update('jg gap'.encode('utf-8'))
md5.update('how to use md5 in python hashlib?'.encode('utf-8'))
print(md5.hexdigest())
print('---------------------------------------------------')
sha1 = hashlib.sha1()
sha1.update('how to use md5 in python hashlib?'.encode('utf-8'))
print(sha1.hexdigest())
print(''.join([chr(random.randint(48, 122)) for i in range(20)]))
print('---------------------------------------------------')
#根据用户输入的登录名和口令模拟用户注册，计算更安全的MD5：
def get_md5(s):
    r = hashlib.md5()
    r.update(s.encode('utf-8'))
    return r.hexdigest()
class User(object):
    def __init__(self,uesrname,password):
        self.name = uesrname
        self.salt = ''.join([chr(random.randint(48,122)) for i in range(20)])
        self.passward = get_md5(password + self.salt)
db = {
    'michael': User('michael', '123456'),
    'bob': User('bob', 'abc999'),
    'alice': User('alice', 'alice2008')
}
def login(user,password):
    user = db[user]
    return user.passward == get_md5(password+user.salt)
# 测试:
assert login('michael', '123456')
assert login('bob', 'abc999')
assert login('alice', 'alice2008')
assert not login('michael', '1234567')
assert not login('bob', '123456')
assert not login('alice', 'Alice2008')
print('ok')