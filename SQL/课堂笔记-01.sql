--数据库操作
  --连接数据库
  mysql -u root -p --（可加密码）
  --退出数据库
  exit/quit/ctrl+d
  --显示所有数据库
  show databases;
  --显示时间
  select now();
  --显示数据库版本
  select version();
  --创建数据库
  create database ...;-- +数据库名 如：python01
  --创建数数据库的默认编码格式为lantin，设置编码格式要在创建时设置
  create database python02 charset=utf8;
  --查看创建的数据库信息
  show create database python01;
  --删除数据库 (有时数据库名包含特殊字符如‘-’，需要将数据库名用``包起来)
  drop database python01;
  --使用数据库
  use python02;
  select database();



--使用数据表
  --查看当前数据库中所有数据表
  show tables;
  --创建数据表
  create table testtable01 (id int,name varchar(30));
  create table testtable02 (
      id int primary key not null auto_increment,
      name varchar(30)
  );
  --查看表的结构
  desc testtable01;
  --创建student表（id、name、age、height、gender、class_id）
  create table student2(
      id int unsigned primary key not null auto_increment,
      name varchar(30),
      age tinyint unsigned default 0,
      height decimal(5,2),
      gender enum('男','女','保密') default '保密',
      class_id int unsigned
  );
  --插入数据
  insert into student values(0,'老王',18,181.88,'男',0);
  --查询数据
  select * from student;
  --添加、删除、修改字段
  alter table student add birthday datetime;
  alter table student modify birthday date;
  alter table student change birthday birth date default '1990-01-01';
  alter table student drop height;
  --删除表
  drop table student2;
  --查看创建表信息
  show create table stuednt;
--数据的增删改查（curd）
  --插入数据
  insert into class values(0,'菜鸟');--不指明字段必须全部字段都得包含
  insert into student (name,gender) values('大乔',2),('貂蝉',2);
  --修改数据
  update student set gender=1;--将所有性别变成男
  update student set gender=1 where id=3;--改变符合where后面的条件的数据
  update student set name='老赵',age=22,gender=2 where id=3;
  --查询数据
  select * from student where gender=2;
  select name as '姓名',gender as '性别' from student;
  select id as '序号',gender as '性别',name as '姓名' from student;
  --删除数据**不要用，很危险，关于数据库的删除都很危险
  delete from student where name='老王';--物理删除，不建议
  alter table student add is_delete bit default 0;--逻辑删除，添加字段，默认为零
  update student set is_delete=1 where id=2;









