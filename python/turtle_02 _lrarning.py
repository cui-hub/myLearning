from turtle import *

length = 10
angle=90
def draw_path(path):
    for symbol in path:
        if symbol=='F':
            forward(length)
        elif symbol=='-':
            left(angle)
        elif symbol == '+':
            right(angle)
path = 'F-F-F-F'
def define_rule(path):
    rule = 'F-F+F+FF-F-F+F'

    return path.replace('F',rule)

speed(0)
path = define_rule(path)
path = define_rule(path)
draw_path(path)

done()