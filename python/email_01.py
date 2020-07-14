from email.mime.text import MIMEText
message = MIMEText('hello, Send by Python','plain','utf-8')
from_addr = 'supercurry123@163.com'
password = input('Password:')
to_addr = '644143529@qq.com'
smpt_server = 'smtp.163.com'
import smtplib
server = smtplib.SMTP_SSL(smpt_server,465)
server.set_debuglevel(1)
server.login(from_addr,password)
server.sendmail(from_addr,[to_addr],message.as_string())
server.quit()
