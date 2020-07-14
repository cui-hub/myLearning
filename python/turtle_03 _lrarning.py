from turtle import *

length = 6
angle=60

rules={
    'Fl':'Fr+Fl+Fr',
    'Fr':'Fl-Fr-Fl'
}
def split_path(path):
    i = 0
    list=[]
    while i <len(path):
        if path[i]=='F':
            list.append(path[i:i+2])
            i+=2
        else:
            list.append(path[i])
            i+=1
    return list
def define_rule(path,rule):
    list=split_path(path)
    for i in range(len(list)):
        sym=list[i]
        if sym in rule:
            list[i]=rule[sym]
    return ''.join(n for n in list)
def draw_path(path):
    list=split_path(path)
    for i in range(len(list)):
        if list[i]=='Fl'or list[i]=='Fr':
            forward(length)
        elif list[i] == '+':
            left(angle)
        elif list[i] == '-':
            right(angle)

speed(0)
path = 'Fr'
for i in range(6):
    path =define_rule(path,rules)
draw_path(path)
done()