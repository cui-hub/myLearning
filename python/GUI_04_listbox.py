import tkinter as tk
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
var1=tk.StringVar()
l = tk.Label(window,bg='green',width=4,textvariable=var1)
l.pack()
def print_selection():
    value = listbox.get(listbox.curselection())
    var1.set(value)

b = tk.Button(window,text='print selection',width=15,height=2,command=print_selection)
b.pack()
var2=tk.StringVar()
var2.set((11,22,33,44,55))
listbox=tk.Listbox(window,listvariable=var2)
listbox.insert(0,'first')
listbox.pack()
window.mainloop()