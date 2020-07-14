import chardet
m = chardet.detect(b'Hellow world')
print(m)
data = '字符串编码一直是令人非常头疼的问题，尤其是我们在处理一些不规范的第三方网页的时候。'.encode('GBK')
print(chardet.detect(data))
data='你说你妈呢'.encode('gbk')
print(chardet.detect(data))