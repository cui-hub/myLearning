import json
import requests
url = 'https://api.github.com'
def build_url(endpoint):
    return'/'.join([url,endpoint])
def better_print(json_str):
    return json.dumps(json.loads(json_str),indent=4)
def request_method():
    response = requests.get(build_url('user/emails'),auth=('cui-hub','090612cyl'))
    print(better_print(response.text))
if __name__=='__main__':
    request_method()
