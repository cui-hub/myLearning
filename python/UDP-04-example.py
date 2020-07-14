import  socket
from multiprocessing import Process

def send_message(udp_socket):
    dest_ip = input('输入对方ip：')

    dest_port = int(input('输入对方port：'))
    data = input('输入发送的消息：')
    udp_socket.sendto(data.encode('utf-8'), (dest_ip, dest_port))

def recv_message(udp_socket):
    recv_data = udp_socket.recvfrom(1024)
    print('[来自用户%s的%s端口的信息：]' % recv_data[1])
    print(recv_data[0].decode('utf-8'))


def main():
    #新创建套接字
    udp_socket1 = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    udp_socket2 = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

    thread1 = Process(target=send_message,args=(udp_socket1,))
    thread2 = Process(target=recv_message,args=(udp_socket2,))
    udp_socket1.bind(('',7788))
    udp_socket2.bind(('',7789))

    while True:
        thread1.start()
        thread2.start()


if __name__=='__main__':
    main()