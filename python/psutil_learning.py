import psutil
print(psutil.cpu_count())
print(psutil.cpu_count(logical=False))
print(psutil.cpu_times())
# for x in range(10):
#     print(psutil.cpu_percent(interval=1,percpu=True))
print(psutil.virtual_memory())
print(psutil.swap_memory())
v_memory = psutil.virtual_memory()
user_str= str(v_memory)
user_list=user_str.split(',')
# print(user_list)
# list=list('he llo, world!'.strip(','))
# print(list)
true_list = []
for i in range(len(user_list)):
    true_list.append(user_list[i].split('=')[1])
# print(true_list)
print('总物理内存:%.2f'%(int(true_list[0])/1073741824))
print('已用内存：%.2f'%(int(true_list[3])/1073741824))
print('可用内存：%.2f'%(int(true_list[1])/1073741824))
print('剩余内存：%.2f'%(int(true_list[4].strip(')'))/1073741824))
print('内存占用率：%s'%float(true_list[2]))
s_list =[str(psutil.swap_memory()).split(',')[i].split('=')[1] for i in range(len(str(psutil.swap_memory()).split(',')))]
print('-'*38)
print('总交换内存:%.2f Gb'%(int(s_list[0])/1073741824))
print('已用内存：%.2f Gb'%(int(s_list[1])/1073741824))
print('可用内存：%.2f'%(int(s_list[2])/1073741824))
print('内存占用率：%s '%float(s_list[3]))
# print('-'*38)
# print(psutil.pids())
# p = psutil.Process(24860)
# print(p.name())
# print(p.exe())
# print(p.cwd())
# print(p.cmdline())
# print(p.ppid())
