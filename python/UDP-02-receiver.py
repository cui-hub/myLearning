import socket
def main():
    udp_soc = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    addr = ('',8080)
    udp_soc.bind(addr)
    while True:
        data = udp_soc.recvfrom(1024)
        if data[0].decode('utf-8')=='exit':
            print('用户已下线')
            break
        print('[来自用户%s的%s端口的信息：]'%data[1])
        print(data[0].decode('utf-8'))
if __name__ == '__main__':
    main()
