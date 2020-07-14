-- 用户信息都存储在系统数据库mysql的user表中
-- 查看用户信息，密码
select host,user,authentication_string from user;
-- 创建用户&授权
grant 权限列表 on 数据库 to '用户名'@'访问主机' identified by '密码';
-- 创建一个 laowang 账号，密码为123456， 只能通过本地访问，并且只能对jing_dong数据库中的所有表进行 读 操作
grant select on jing_dong.* to 'laowang'@'localhost' identified by '123456';
-- 创建一个laoli 账号，密码12345678，可以任意电脑进行连接访问，并且随 jing_dong 数据库中的所有表拥有所有权限
grant all privileges on jing_dong.* to 'laoli'@'%' identified by '12345678';
