import itertools,functools
naturals = itertools.count(0)
cs1 = itertools.cycle('abc')
cs2 = itertools.cycle([12,23,56,49])
ns1 = itertools.repeat('acs',5)
ns2 = itertools.repeat([12,23],5)
n = itertools.takewhile(lambda x:x<=10,naturals)
print(list(n))

for i in itertools.chain('abx',[1,2,3],(4,5,6),{'a':7,'b':8}):
    print(i)
for i ,j in itertools.groupby('AAaccCJjjjjjjKkljKJHjkhnKJHJhjHJkhk',lambda x: x.upper()):
    print(i,list(j))
print(type(naturals))
print('-----------------------------------------------------')
#计算π：
def pi(N):
    return functools.reduce(lambda x,y: x+y,[(-4 if i %2==0 else 4)/(2*i-1)for i in itertools.takewhile(lambda x: x<=N,itertools.count(1))])
# 测试:
print(pi(10))
print(pi(100))
print(pi(1000))
print(pi(10000))
assert 3.04 < pi(10) < 3.05
assert 3.13 < pi(100) < 3.14
assert 3.140 < pi(1000) < 3.141
assert 3.1414 < pi(10000) < 3.1415
print('ok')
