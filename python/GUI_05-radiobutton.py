import tkinter as tk
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
var1=tk.StringVar()
val2 =tk.StringVar()
l = tk.Label(window,bg='green',width=20,textvariable=val2)#textvariable=val2改为text=’empty‘
l.pack()
def print_selection():
    val2.set('you have selected'+' '+var1.get())
    #config命令意味着l中的参数可变
    # l.config(text='you have selected'+var1.get())
rb1 = tk.Radiobutton(window,text='option A',variable=var1,value = 'A',command = print_selection)
rb1.pack()
rb2 = tk.Radiobutton(window,text='option B',variable=var1,value = 'B',command = print_selection)
rb2.pack()
rb3 = tk.Radiobutton(window,text='option C',variable=var1,value = 'C',command = print_selection)
rb3.pack()
window.mainloop()
