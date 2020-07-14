from multiprocessing import Process, Queue
import os,time,random

#写数据进程执行的代码
def write(q):
    print('Process to write:%s'%os.getpid())
    for value in ['A','B','C']:
        print('Put %s to Queue...'%value)
        q.put(value)
        time.sleep(random.random())

    #读数据进程执行的代码：
def read(q):
    print('Process to read:%s'%os.getpid())
    while True:
        value = q.get()
        print('Get %s from Queue.'%value)
   


if __name__ =='__main__':
    #父进程创建Queue，并传给各个子进程：
    q = Queue()
    pw = Process(target=write,args=(q,))
    pr = Process(target=read,args=(q,))
    #启动子程序pw
    pw.start()
    #启动子程序pr
    pr.start()
    #等待pw结束
    pw.join()
    pr.terminate()

