-- 备份
mysqldump -u root -p 数据库名 > 文件名.sql;
mysqldump -u root -p jing_dong > jing-dong.sql
-- 恢复
  -- 先连接mysql，创建新数据库new_jing_dong
create database new_jing_dong charset=utf8;
-- 退出mysql，执行命令
mysql -u root -p new_jing_dong<jing-dong.sql


-- 配置主从同步的基本步骤：
-- 1.主服务器上，必须开启二进制日志机制和配置一个独立的ID
-- 2.在每一个服务器上，配置一个唯一的ID，创建一个专门用来复制主服务器数据的账号
-- 3.再开始复制进程前，在主服务器上记录二进制文件的位置信息
-- 4.如果在开始复制之前，数据库中已经有数据，就必须先创建一个数据快照（可以使用mysqldump导出数据库，或直接复制数据文件）
-- 5.配置从服务器要连接的主服务器的IP地址和登陆授权，二进制文件名和位置
  -- 主服务器备份
  mysqldump -u root -p  --all-databases --lock-all-tables > ~/master_db.sql

