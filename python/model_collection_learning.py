from collections import  namedtuple,deque,defaultdict,OrderedDict,ChainMap,Counter
import os,argparse
Point = namedtuple('point',['x','y'])
p = Point(1,2)
print(p.x)
print('--------------------------------------------------------------------')
lis = ['a','b','c','d']
q = deque(lis)
lis.append('x')
lis.pop(1)
print(lis)
q.append('y')
q.appendleft('e')
print(q)
q.popleft()
print(lis)
print(q)
print('--------------------------------------------------------------------')
dic = defaultdict(lambda :'DefaultValue')
dic['key1'] = 'abc'
print(dic['key1'])
print(dic['key2'])
print('--------------------------------------------------------------------')
d = dict([('a',1),('b',2),('c',3),('d',4)])
print(d['c'])
print(d)
od = OrderedDict(d)
print(od)
od['x']=5
od['z']=9
od['y']=11
print(od['z'])
print(od)
print('--------------------------------------------------------------------')

class LastUpdatedOrderedDict(OrderedDict):
    def __init__(self,capacity):
        super().__init__()
        self._capacity = capacity

    def __setitem__(self, key, value):
        containsKey = 1 if key in self else 0
        # 调用时给属性设置self._capacity = 3
        # 没有添加三个不同key-value  队列不会满len（self）< 3那么下面的肯定不会执行
        # 如果已经添加了三组元素后也就是足够容量了   len(self) == 3
        # 那么如果下一个添加的元素key值不等于前面的任何一个key值
        # 那么此时看上一句containsKey = 0  也就是说3-0=3
        if len(self) - containsKey >=self._capacity:
            last = self.popitem(last=False)
            print('remove:',last)
        if containsKey:#遇到重名的key不管队列是不是满的先删除key相同的元素
            del self[key]
            print('set:',(key,value))
        else:
            print('add:',(key,value))
        OrderedDict.__setitem__(self,key,value)#将（key,value）添加到Dict中，这也是继承了父类的方法。
OD = LastUpdatedOrderedDict(3)
OD['A']=1
OD['B']=2
print(OD)
OD.__setitem__('C',3)
print(OD)
OD['A']=4
print(OD)
OD['D']=11
print(OD)
print('--------------------------------------------------------------------')
#super函数：继承父类同名方法，可以多重继承，例子如下：
class Nation:
    def property(self):
        print('China')
class Province(Nation):
    def property(self):
        super(Province, self).property()
        print('Zhejiang')
class College(Province):
    def property(self):
        super().property()
        print('ZJU')
cui = College()
cui.property()
print('--------------------------------------------------------------------')
#chainmap
#构造缺省参数：
defaults = {'color':'red','user':'gust'}
#构造命令参数：
parser = argparse.ArgumentParser()
parser.add_argument('-u','--user')
parser.add_argument('-c','--color')
namespace = parser.parse_args()
command_line_args = {k:v for k,v in vars(namespace).items() if v}
#组成ChainMap：
combined = ChainMap(command_line_args,os.environ,defaults)
#打印参数：
print('color=%s'%combined['color'])
print('user=%s'%combined['user'])
print('--------------------------------------------------------------------')
#Counter
print(Counter('programming'))
c = Counter()
for ch in 'programming':
    c[ch] = c[ch] + 1
print(c)
#自己尝试写Counter（）定义：
def counter(str):
    dict = defaultdict(lambda :0)
    for ch in str:
        dict[ch] += 1
    return dict
print(counter('programming'))