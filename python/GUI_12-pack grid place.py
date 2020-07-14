import tkinter as tk
from tkinter import messagebox
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
# tk.Label(window,text='lll').pack(side='top')
# tk.Label(window,text='lll').pack(side='bottom')
# tk.Label(window,text='lll').pack(side='left')
# tk.Label(window,text='lll').pack(side='right')
# for i in range(4):
#     for j in range(3):
#         tk.Label(window,text='lll').grid(row=i,column=j,padx=10,pady=10)
tk.Label(window,text='lll').place(x=10,y=100,anchor='nw')



window.mainloop()