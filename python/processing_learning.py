from multiprocessing import Process
import  os
from time import  sleep
def run(name):
    print('Run child process %s(%s)'%(name,os.getpid()))
if __name__ =='__main__':
    print ('Parent process :%s'%os.getpid())
    p = Process(target=run,args=('test',))
    print('Child process will start:')
    p.start()
    p.join()
    print('Child process end.')