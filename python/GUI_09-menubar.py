import tkinter as tk
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
l = tk.Label(window,bg='green',width=20,text='')
l.pack()
count = 0
def new_project():
    global count
    l.config(text='do '+ str(count))
    count+=1

#创建一个菜单栏
menubar = tk.Menu(window)
#创建菜单栏的第一块功能栏:filemenu
filemenu = tk.Menu(menubar,tearoff=0)
#给第一个功能栏命名File并设置间距
menubar.add_cascade(label='File',menu=filemenu)
#给File添加下拉命令：new、open、save、分隔栏、exit
filemenu.add_command(label='New',command = new_project)
filemenu.add_command(label='Open',command = new_project)
filemenu.add_command(label='Save',command = new_project)
filemenu.add_separator()
filemenu.add_command(label='Exit',command = window.quit)


#创建一个编辑栏
editmenu = tk.Menu(menubar,tearoff=0)
menubar.add_cascade(label='Edit',menu=editmenu)
editmenu.add_command(label='Cut',command=new_project)
editmenu.add_command(label='Copy',command=new_project)
editmenu.add_command(label='Paste',command=new_project)
window.config(menu=menubar)
#创建一个子菜单：file>import>submenu1
submenu = tk.Menu(filemenu,tearoff=0)
filemenu.add_cascade(label='Import',menu=submenu,underline=0)
submenu.add_command(label='submenu1',command=new_project())
submenu.add_command(label='submenu2',command=new_project())





window.mainloop()