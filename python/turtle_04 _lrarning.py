import turtle as tt
def draw_tree(branch_length):
    if branch_length>5:
        tt.forward(branch_length)
        tt.right(20)
        draw_tree(branch_length-15)
        tt.left(40)
        draw_tree(branch_length-15)
        tt.right(20)
        # print(f'右转 20')
        tt.backward(branch_length)
        #     # print(f'向后 {branch_length}')
        tt.pencolor('brown')
        tt.pensize(2)
    else:
        tt.color('green')  # 画末端
        tt.pensize(4)


def draw():
    tt.left(90)
    tt.penup()
    tt.backward(200)
    tt.pendown()
    tt.pencolor('brown')
    tt.pensize(2)
    draw_tree(80)
    tt.done()

draw()