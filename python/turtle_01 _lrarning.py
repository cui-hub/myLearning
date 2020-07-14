from turtle import *
import math
# width(4)
# forward(200)
# # 右转90度:
# right(90)
#
# # 笔刷颜色:
# pencolor('red')
# forward(100)
# right(90)
#
# pencolor('green')
# forward(200)
# right(90)
#
# pencolor('blue')
# forward(100)
# right(90)
#
# # 调用done()使得窗口等待被关闭，否则将立刻关闭窗口:
# done()
# def drawStar(x,y):
#     width(1)
#     pencolor('red')
#     pu()
#     goto(y)
#     pd()
#     seth(0)
#     for i in range(5):
#         fd(40)
#         rt(144)
# for x in range(0,250,50):
#     drawStar(x,0)
# done()
#
# for i in range(3):
#     forward(200)
#     left(120)
# for i in range(5):
#     forward(100)
#     right(144)
# done()
speed(0)
for i in range(8):
    if i%2 == 0:
        color('red')
    else:
        color('blue')
    begin_fill()
    for i in range(2):
        forward(100)
        right(45)
        forward(100)
        right(135)
    right(45)
    end_fill()
color('yellow')
# pencolor('black')
forward(100)
right(112.5)
begin_fill()
for i in range(8):
    forward(50*2**(0.5)/math.sin(math.radians(67.5)))
    right(45)
end_fill()


done()