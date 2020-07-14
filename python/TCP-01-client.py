from socket import *

def main():
    tcp_socket = socket(AF_INET,SOCK_STREAM)
    dest_ip = input('请输入目标IP：')
    dest_port = int(input('请输入目标端口：'))
    tcp_socket.connect((dest_ip,dest_port))
    while True:
        data = input('请输入传输数据：')
        if data !='exit':
            tcp_socket.send(data.encode('utf-8'))
            recvdata1 = tcp_socket.recv(1024)
            recvdata2 = tcp_socket.recv(1024)
            print(recvdata1.decode('utf-8'))
            print(recvdata2.decode('utf-8'))

        else:
            print('服务器已关闭服务。')
            break
    tcp_socket.close()


if __name__ == '__main__':
    main()
