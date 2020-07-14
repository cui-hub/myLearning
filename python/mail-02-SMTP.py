# _*_coding:utf-8_*_
#发送邮件
import  smtplib
#构建邮件内容
from email.mime.text import MIMEText

#smtp服务器
mail_host = 'smtp.qq.com'
mail_user = '644143529@qq.com'
#密码-授权码
mail_pass = 'dmwuexwbkhhebeba'
#发件人
me = '崔永亮'+'<'+mail_user+'>'
#收件人
mail_receiver = ['supercurry123@163.com']
#邮件主题
mail_subject ='python发送邮件测试'
#邮件内容
mail_content = '这是纯文本信息<br />纯文本信息'


#构建邮件内容：
# message = MIMEText(mail_content,'plain','utf-8')
message = MIMEText(mail_content,'html','utf-8')
message['Subject'] = mail_subject
message['From'] = me
message['To'] = ';'.join(mail_receiver)


#发送邮件:
#连接服务器
sever = smtplib.SMTP_SSL(mail_host,465)
#登录
sever.login(mail_user,mail_pass)
#发送：发件人、收件人、消息
sever.sendmail(me,mail_receiver,message.as_string())
sever.quit()