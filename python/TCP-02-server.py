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
        while True:
            recv_data = client_socket.recv(1024)
            if recv_data:
                print('来自客户的信息：%s'%recv_data.decode('utf-8'))
                response = input('回复给客户：').encode('utf-8')
                client_socket.send(response)
                #client_socket.send('请问还有什么问题吗？有问题请继续输入，否则请输入“exit”退出。'.encode('utf-8'))
            else:
                break
        client_socket.close()
        print('over...')


    tcp_socket.close()

if __name__ == '__main__':
    main()