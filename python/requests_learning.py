import requests
import json
from urllib.request import urlopen
r = requests.get('https://www.douban.com/') # 豆瓣首页
print(r.status_code)
#print(r.text)
print(r)
with urlopen('https://www.douban.com/') as f:
    print(f)
    #print(f.read().decode('utf-8')) == print(r.text)都是字符串类型
    print(type(f.read().decode('utf-8')))
print('-'*38)
r = requests.get('https://www.douban.com/search',params={'q':'python','cat':'1001'})
print(r.url)
print(r.encoding)
# print(r.content)
print('-'*38)
# r = requests.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json')
# # print(r.json())
#r = requests.get('https://www.douban.com/', headers={'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit'})
#print(r.text)
r = requests.post('https://accounts.douban.com/login',data={'form_email': 'abc@example.com', 'form_password': '123456'})
print(r.url)
print(r.text)