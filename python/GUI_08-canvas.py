import tkinter as tk
from PIL import Image
image = Image.open('l.jpg')
w,h = image.size
image.thumbnail((w//4,h//4))
image.save('l.gif','gif')
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
l = tk.Label(window,bg='green',width=20,text='')
l.pack()
canvas=tk.Canvas(window,bg='blue',height=100,width=200)
image_file=tk.PhotoImage(file='l.gif')
image = canvas.create_image(10,10,anchor='nw',image=image_file)
x0,y0,x1,y1 = 50,50,80,80
line = canvas.create_line(x0,y0,x1,y1)
oval= canvas.create_oval(x0,y0,x1,y1,fill='red')
arc = canvas.create_arc(x0+30,y0+30,x1+30,y1+30,start=0,extent=90)
rect = canvas.create_rectangle(150,30,170,50)
canvas.pack()
def moveit():
    canvas.move(rect,0,2)
button = tk.Button(window,text='move',command=moveit).pack()
window.mainloop()