import socket
udp_soc = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
udp_soc.bind(('',8081))
while True:
    data = input('请输入传输内容：')
    if data =='exit':
        udp_soc.sendto(data.encode('utf-8'), ('127.0.0.1',7788 ))
        break
    udp_soc.sendto(data.encode('utf-8'),('127.0.0.1',7788))
udp_soc.close()
