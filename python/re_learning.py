import re
if re.match(r'^\d{3}\-\d{3,8}$','123-457891'):
    print('OK')
else:
    print('False')

cm = re.split(r'[\s\,\;]+', 'a,b;; c  d')
print(cm)

t = '23:5:26'
time = re.match(r'^(0[0-9]|1[0-9]|2[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])',t)
print(time.group(0))
print(time.group(1))
print(time.group(2))
print(time.group(3))
print(time.groups())