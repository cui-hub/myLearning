import tkinter as tk
from tkinter import messagebox
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
def hit_me():
    #tk.messagebox.showinfo(title='Hi',message='hack')
    # tk.messagebox.showwarning(title='Hi',message='hack')
    #tk.messagebox.showerror(title='Hi',message='hack')
    #tk.messagebox.askquestion(title='Hi',message='hack?')#返回yes or no
    #tk.messagebox.askyesno(title='Hi',message='hack')#返回True or False
    tk.messagebox.askokcancel(title='Hi',message='hack')#返回True or False





tk.Button(window,text='hit me',command=hit_me).pack()



window.mainloop()