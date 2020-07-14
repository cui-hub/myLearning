import tkinter as tk
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
l = tk.Label(window,bg='green',width=20,text='')
l.pack()
var1=tk.IntVar()
var2=tk.IntVar()

def fun():
   if (var1.get()==0)&(var2.get()==0):
       return l.config(text='I don\'t love either')
   elif (var1.get()==1)&(var2.get()==0):
       return l.config(text='I  love Python only')
   elif (var1.get()==1)&(var2.get()==1):
       return l.config(text='I  love both')
   elif (var1.get()==0)&(var2.get()==1):
       return l.config(text='I  love C++ only')



c1 = tk.Checkbutton(window,text='Python',variable=var1,onvalue=1,offvalue=0,command=fun)
c2 = tk.Checkbutton(window,text='C++',variable=var2,onvalue=1,offvalue=0,command=fun)
c1.pack()
c2.pack()
window.mainloop()