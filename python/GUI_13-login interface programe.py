import  tkinter as tk
import pickle
from tkinter import messagebox

window =tk.Tk()
window.title('Welcome to My Python')
window.geometry('450x300')
#插入图片
canvas = tk.Canvas(window,height=200,width=500)
image_file = tk.PhotoImage(file='welcome.gif')
image = canvas.create_image(0,0,anchor='nw',image = image_file)
canvas.pack(side='top')
#label
tk.Label(window,text='User name:').place(x=50,y=150)
tk.Label(window,text='Password:').place(x=50,y=190)
#entry
var_user_name = tk.StringVar()
var_user_name.set('example@qq.com')#提示用户邮箱格式
var_password = tk.StringVar()
entry_user_name = tk.Entry(window,textvariable=var_user_name)
entry_user_name.place(x=160,y=150)
entry_password = tk.Entry(window,textvariable=var_password,show='*')
entry_password.place(x=160,y=190)
#button
def user_login():
    user_name=var_user_name.get()
    user_password=var_password.get()
    try:
        with open('user_info.pickle','rb') as user_file:
            user_info = pickle.load(user_file)
    except FileNotFoundError:
        with open('user_info.pickle','wb') as user_file:
            user_info={'admin':'admin'}
            pickle.dump(user_info,user_file)
    if user_name in user_info:
        if user_password == user_info[user_name]:
            tk.messagebox.showinfo(message='Welcome,'+user_name)
        else:
            tk.messagebox.showinfo(message='Your password is wrong,try again.')
    else:
        is_sign_up = tk.messagebox.askyesno(message='Your account has not signed up yet, Sign up?')
        if is_sign_up:
            user_sign_up()

def user_sign_up():
    def sign_to_my_python():
        newname = new_name.get()
        newpassword = new_password.get()
        newpasswordconfirm=new_password_confirm.get()
        with open('user_info.pickle','rb')as user_file:
            exist_user_info = pickle.load(user_file)
        if newpassword!=newpasswordconfirm:
            tk.messagebox.showerror(title='Error',message='Password an confirm password must be the same!')
        elif newname in exist_user_info:
            tk.messagebox.showerror(title='Error',message='This username has been occupied! please change it.')
        else:
            exist_user_info[newname]=newpassword
            with open('user_info.pickle','wb')as user_file:
                pickle.dump(exist_user_info,user_file)
            tk.messagebox.showinfo(title='Welcome',message='You have successfully signed up!')
            window_sign_up.destroy()

    window_sign_up = tk.Toplevel(window)
    window_sign_up.geometry('350x200')
    window_sign_up.title('Sign up window')
    #新用户名：
    new_name = tk.StringVar()
    tk.Label(window_sign_up,text='User name:').place(x=10,y=10)
    entry_new_name = tk.Entry(window_sign_up,textvariable=new_name)
    entry_new_name.place(x=150,y=10)
    #设置密码：
    new_password = tk.StringVar()
    tk.Label(window_sign_up,text='Password:').place(x=10,y=50)
    entry_new_password = tk.Entry(window_sign_up,textvariable=new_password,show='*')
    entry_new_password.place(x=150,y=50)
    #确认密码：
    new_password_confirm = tk.StringVar()
    tk.Label(window_sign_up,text='Confirm Password:').place(x=10,y=90)
    entry_new_password_donfirm = tk.Entry(window_sign_up,textvariable=new_password_confirm,show ='*')
    entry_new_password_donfirm.place(x=150,y=90)
    #sign up button:
    tk.Button(window_sign_up,text='Sign up',command=sign_to_my_python).place(x=150,y=130)




tk.Button(window,text='Login',command=user_login).place(x=170,y=230)
tk.Button(window,text='Sign up',command=user_sign_up).place(x=270,y=230)




window.mainloop()
with open('user_info.pickle','rb')as user_file:
    user_info=pickle.load(user_file)
print(user_info)