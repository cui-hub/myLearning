import tkinter as tk
window = tk.Tk()
window.title('my window')
window.geometry('200x200')
l = tk.Label(window,bg='green',text='on the window')
l.pack()
fram = tk.Frame(window)
fram.pack()
fram_l =tk.Frame(fram)
fram_r =tk.Frame(fram)
fram_l.pack(side='left')
fram_r.pack(side='right')
tk.Label(fram_l,bg='green',text='on the frame_l1').pack()
tk.Label(fram_l,bg='green',text='on the frame_l2').pack()

tk.Label(fram_r,bg='green',text='on the frame_r1').pack()


window.mainloop()