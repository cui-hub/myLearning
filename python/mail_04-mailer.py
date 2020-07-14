from mailer import Mailer
from mailer import Message
from email.header import Header
mail_host = 'smtp.qq.com'
mail_user = '644143529@qq.com'
#密码-授权码
mail_pass = 'dmwuexwbkhhebeba'
#发件人
me = '崔永亮'+'<'+mail_user+'>'
#收件人
mail_receiver = ['supercurry123@163.com']
#邮件主题
mail_subject =Header('python发送邮件测试').encode()
#邮件内容
mail_content = '这是纯文本信息<br />纯文本信息'


#附件
mail_attach = 'L.jpg'
#主体信息
message = Message(From=me,To=mail_receiver,charset='utf-8')
message.Subject = mail_subject
message.Body = mail_content
message.attach(mail_attach)

#发送
sever = Mailer(host=mail_host,pwd=mail_pass,usr=mail_user,use_ssl = True)
sever.send(message)
print('finished..')