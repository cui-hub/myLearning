import base64
print('binary\x00string')
print(b'binarystring')
print('binary\x00string'.encode('utf-8'))
bas = base64.b64encode(b'binary\x00string')
print (base64.b64encode(b'binarystring'))
print(bas)
print(base64.b64decode(b'YmluYXJ5c3RyaW5n'))
print('-----------------------------------------------------------')
print('i\xb7\x1d\xfb\xef\xff')
print(b'i\xb7\x1d\xfb\xef\xff')
print(base64.b64encode(b'i\xb7\x1d\xfb\xef\xff'))
print(base64.urlsafe_b64encode(b'i\xb7\x1d\xfb\xef\xff'))
print('-----------------------------------------------------------')
s = b'YmluYXJ5c3RyaW5n'
print(len(s))
for i in range(0,len(s),4):
    print(s[i:i+4])
print('-----------------------------------------------------------')
def safe_base64_decode(s):
    for i in range(0,len(s),4):
        if i+4 > len(s):
            p = s[i:len(s)]+ b'='*(4-(len(s)%4))
            f = s[0:i]
            new_s = f+p
        else:
            new_s = s
    print (new_s)
    return base64.b64decode(new_s)
# 测试:
assert b'abcd' == safe_base64_decode(b'YWJjZA=='), safe_base64_decode('YWJjZA==')
assert b'abcd' == safe_base64_decode(b'YWJjZA'), safe_base64_decode('YWJjZA')
print('ok')