import socket
def send_message():
    udp_soc = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    dest_ip = input('请输入对方IP：')
    dest_port = int(input('请输入对方port：'))

    while True:
        dest_data = input('请输入传输内容：')
        if dest_data == 'exit':
            udp_soc.sendto(dest_data.encode('utf-8'), (dest_ip, dest_port))
            break

        udp_soc.sendto(dest_data.encode('utf-8'),(dest_ip,dest_port))
    udp_soc.close()


if __name__ == '__main__':
    send_message()