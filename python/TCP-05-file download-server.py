from socket import *

def main():
    tcp_socket = socket(AF_INET,SOCK_STREAM)
    tcp_socket.bind(('',8080))
    tcp_socket.listen(128)
    print('等待客户连接...')
    while True:
        print('等待新客户连接...')
        client_socket,client_addr = tcp_socket.accept() #accept：接收到一个客户后，返回一个套接字（专门为该客户服务）和该客户的地址，方便处理该客户的事务和回复该客户
        print('来自客户%s:%s的连接：'%client_addr)
        recv_filename = client_socket.recv(1024).decode('utf-8')
        print('客户想要下载的文件：%s'%recv_filename)
        data = None
        try:
            f = open(recv_filename,'rb')
            data = f.read()
            f.close()
        except Exception as ret:
            print('没有要下载的文件')
        # with open(recv_filename,'rb')as f:
        #     data = f.read()
        if data:
            client_socket.send(data)
        client_socket.close()
        print('over...')


    tcp_socket.close()

if __name__ == '__main__':
    main()