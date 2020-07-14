import pickle
import json

d = dict(name='Bob', age=20, score=88)
f = open('C:/Users/Administrator/Desktop/test.txt','w')
print (json.dumps(d))
f.close()
with open('C:/Users/Administrator/Desktop/test.txt','w') as f1:
    json.dump(d,f1)
with open('C:/Users/Administrator/Desktop/test.txt','r') as f2:
    print(type(f2.read()))
with open('C:/Users/Administrator/Desktop/test.txt','rb') as f3:
    print(json.load(f3))
with open('C:/Users/Administrator/Desktop/test.txt','rb') as f4:
    f5 = f4.read()

    print(json.loads(f5))
