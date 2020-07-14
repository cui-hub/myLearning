import time
from multiprocessing.managers import  BaseManager
class QueueManager(BaseManager):
    pass
QueueManager.register('get_task_queue')
QueueManager.register('get_result_queue')
sever_address = '39.174.145.240'
print('Connect to sever %s...'%sever_address)
m = QueueManager(address = (sever_address,8001),authkey = 'cyl'.encode())
m.connect()
task = m.get_task_queue
result = m.get_result_queue
while (not task.empty()):
    image_url = task.get(True,timeout = 5)
    print('run task download %s...'%image_url)
    time.sleep(1)
    result.put('%s--->success'%image_url)
print('worker exit.')