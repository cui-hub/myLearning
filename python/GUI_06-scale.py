import tkinter as tk
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
def fun(v):
    l.config(text='you have selected '+v)
l = tk.Label(window,bg='green',width=20,text='')
l.pack()

scale= tk.Scale(window,label='Drag the bar',from_=5,to=11,orient=tk.HORIZONTAL,length=200,showvalue=0,tickinterval=3,resolution=0.01,command=fun)#command插入函数会自动传一个数值，也就是get的的数值
scale.pack()

window.mainloop()