# -*- coding: utf-8 -*-
#!/usr/bin/python
import os
def find_files(strig,path_name):

    for path1 in os.listdir(path_name):
        path2 = os.path.join(path_name,path1)
        if os.path.isdir(path1):
            find_files(strig, path2)
        elif strig in path1:

            print(os.path.split(path2)[1])
strig=input('请输入需要查找的文件名：')
os.chdir('C:/Users/Administrator/Desktop')
path_name=os.getcwd()

print('找到的文件：')
find_files(strig,path_name)