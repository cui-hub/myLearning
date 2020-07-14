import random,time,queue
from multiprocessing.managers import BaseManager
from multiprocessing import freeze_support
task_number = 10
#发送信息列队
task_queue = queue.Queue()
#接受结果列队
result_queue = queue.Queue()
def get_task():
    return task_queue
def get_result():
    return result_queue
class QueueManager(BaseManager):
    pass
def win_run():
    QueueManager.register('get_task_queue',callable=get_task)
    QueueManager.register('get_result_queue',callable=get_result)
    manager = QueueManager(address = ('39.174.145.240',8001),authkey = 'cyl'.encode())
    manager.start()

    task = manager.get_task_queue()
    result = manager.get_result_queue()
    for url in ['ImageUrl_'+str(i) for i in range(10)]:
        print('url is %s'%url)
        task.put(url)
    print('try get result')
    for i in range(10):
        print('result is %s'%result.get(timeout = 10))

    manager.shutdown()
if __name__ == '__main__':
    #Windows下多进程可能有问题，添加这句话缓解：
    freeze_support()
    win_run()