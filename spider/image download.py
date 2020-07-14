import requests
from contextlib import closing


def download():
    #下载图片
    URL= 'https://b-ssl.duitang.com/uploads/blog/201312/04/20131204184148_hhXUT.jpeg'
    response = requests.get(URL)
    print(response.status_code)
    # print(response.headers)
    # print(response.content)
    with open('demo.jpg','wb') as f:
        for chunk in response.iter_content(128):
            f.write(chunk)
download()

def improved_download():
    URL = 'http://photocdn.sohu.com/20120323/Img338614056.jpg'
    #response = requests.get(URL)
    with closing( requests.get(URL))as response:
        with open ('demo2,jpg','wb')as f:
            for chunk in response.iter_content(128):
                f.write(chunk)
improved_download()
def paper_download():
    url = 'https://onlinelibrary.wiley.com/doi/pdf/10.1002/aenm.201701110'
    headers = {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36'}
    response = requests.get(url,headers=headers)
    print(response.headers)
    print(response.status_code)
    #print(response.content.decode('utf-8'))
    #with open('paper.pdf','wb')as f:
        #f.write(response.content.decode('utf-8'))
paper_download()
#pdf读取并下载（关键在于找到文件原网址并请求成功）
res = requests.get('http://lxml.de/lxmldoc-4.1.1.pdf')
print(res.headers)
print(res.status_code)
res.encoding = res.apparent_encoding
with open('./a.pdf', 'wb') as f:
    f.write(res.content)



