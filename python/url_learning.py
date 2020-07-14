from urllib import request,parse
'''
url = "http://u.mumayi.com/oauth/?m=Oauth&a=authorize&client_id=100004&response_type=code&display=&error_info=%E5%AF%86%E7%A0%81%E8%BE%93%E5%85%A5%E9%94%99%E8%AF%AF&error_line=2&usernm=123456"
headers ={
'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
'Accept-Language': 'zh-CN,zh;q=0.9',
'Cache-Control': 'max-age=0',
'Connection': 'keep-alive',
'Cookie': 'UM_distinctid=16e17310a72342-0c549a9ec1cd59-3d375b01-1fa400-16e17310a73294; PHPSESSID=0hl48ft9gnmnqtu7883qdnh237',
'Host': 'u.mumayi.com',
'Referer': 'http://u.mumayi.com/oauth/?m=Oauth&a=authorize&client_id=100004&redirect_uri=http://pay.mumayi.com/?a=callback&response_type=code',
'Upgrade-Insecure-Requests': '1',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36'
}
post_data = {
'm': 'Oauth',
'a': 'authorize',
'client_id': '100004',
'response_type': 'code',
'display':'' ,
'error_info': '密码输入错误',
'error_line': '2',
'usernm': '123456'
}
encode_data = parse.urlencode(post_data).encode('utf-8')
request_attr = request.Request(url = url,data=encode_data,headers=headers)
response_data = request.urlopen(request_attr).read().decode('utf-8')
print(response_data)
'''
import ssl,json
ssl.create_default_context=ssl._create_unverified_context
print('-'*38)
IP = input('请输入查询IP：')
url = 'https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=%s&co=&resource_id=6006'%IP
response_data = request.urlopen(url).read().decode('gbk')
print(json.loads(response_data)['data'][0]['location'])