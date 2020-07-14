import smtplib
from email.mime.text import MIMEText  #文本
from email.mime.multipart import MIMEMultipart  #多功能盒子
from email.mime.application import MIMEApplication  #附件内容


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

#构建邮件体
message = MIMEMultipart()
message['Subject'] = mail_subject
message['From'] = me
message['To'] = ';'.join(mail_receiver)  #to 接受字符串，不能是list
#纯文本添加
text = MIMEText(mail_content,'html','utf-8')
message.attach(text)
#jpg类型附件
jpg = MIMEApplication(open('./L.jpg','rb').read())
jpg.add_header('Content-Disposition','attachment',filename = 'jpg附件测试.jpg')
message.attach(jpg)
#excel信息(word文件类似操作）
# xl = MIMEApplication(open('C:/Users/Administrator/Desktop/test.xlsx','rb').read())
# xl.add_header('Content-Disposition','attachment',filename = 'jpg附件测试.xlsx')
# message.attach(xl)

#发送邮件
sever = smtplib.SMTP_SSL(mail_host,465)
sever.login(mail_user,mail_pass)
sever.sendmail(me,mail_receiver,message.as_string())  #sendmail接收人必须是list形式
sever.quit()
print('邮件发送成功')