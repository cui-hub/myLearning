from io import StringIO
from io import BytesIO
f = StringIO()
f.write('hellow')
f.write(' ')
f.write('world!')
print (f.getvalue())

f2 = StringIO('Listen \n to\n me\ncarefully!')
for line in f2.readlines():
    print(line.strip())

m = BytesIO()
m.write('中文'.encode('utf-8'))
print(m.getvalue())

