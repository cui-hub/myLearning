import socket

def main():
    #创建套接字
    tcp_socket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    #获取服务器的ip、port
    dest_ip = input('请输入下载服务器的ip：')
    dest_port = int(input('请输入下载服务器的port：'))
    #连接服务器
    tcp_socket.connect((dest_ip,dest_port))
    #获取下载的文件的名字
    down_filename = input('请输入下载文件名：')
    #发送需要下载的文件名
    tcp_socket.send(down_filename.encode('utf-8'))
    #接受服务器发来的数据，并写入文件内
    data = tcp_socket.recv(1024*1024)  #1M内容每次
    if data:
        with open('TEST'+down_filename,'wb')as f:
            f.write(data)
    print('服务器没有资源。')
    #关闭套接字
    tcp_socket.close()



if __name__=='__main__':
    main()