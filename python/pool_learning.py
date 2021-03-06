from multiprocessing import Pool
import time,os,random
def long_time_task(name):
    print('Run task %s (%s)'%(name,os.getpid()))
    start = time.time()
    time.sleep(random.random()*3)
    end = time.time()
    print('Task %s runs %.2f seconds.'%(name,(end - start)))
if __name__ == '__main__':
    print('Parent process %s'%os.getpid())
    p = Pool(4)
    for i in range(8):
        p.apply_async(long_time_task,args=(i,))
    print('Wait for all subprocesses done...')
    p.close()
    p.join()
    print('All subprocesses done...')