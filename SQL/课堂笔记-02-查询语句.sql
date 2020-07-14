--查询学习
--先创建学习数据库
create database python_learning charset=utf8;
use python_learning;
create table student(
  id int unsigned primary key not null auto_increment,
  name varchar(20) default '',
  age tinyint unsigned default 0,
  height decimal(5,2),
  gender enum('男','女','中性','保密') default '保密',
  class_id int unsigned default 0,
  is_delete bit default 0
);
create table class(
  id int unsigned auto_increment primary key not null,
  name varchar(30) not null
);
insert into student values
(0,'小明',18,180.00,2,1,0),
(0,'小月月',18,180.00,2,2,0),
(0,'彭于晏',29,185.00,1,1,0),
(0,'刘德华',59,175.00,1,2,1),
(0,'黄蓉',38,160.00,2,1,0),
(0,'凤姐',28,150.00,4,2,1),
(0,'王祖贤',18,172.00,2,1,1),
(0,'周杰伦',36,null,1,1,0),
(0,'程坤',27,181.00,1,2,0),
(0,'刘亦菲',25,166.00,2,2,0),
(0,'金星',33,162.00,3,3,1),
(0,'静香',12,180.00,2,4,0),
(0,'郭靖',12,170.00,1,4,0),
(0,'周杰',34,176.00,2,5,0);

insert into class values
(0,'python_01班'),(0,'python_02班');
  --查询所有字段
select * from student;
  --查询指定字段
select name,gender,age from student;
  --使用as给字段取别名
select name as '姓名',gender as '性别',age as '年龄' from student;
  --可以通过as给表起别名
select student.name as '姓名',student.gender as '性别',student.age as '年龄' from student;
select name as '姓名',gender as '性别',age as '年龄' from student as s;
select s.name as '姓名',s.gender as '性别',s.age as '年龄' from student as s;
select student.name as '姓名',student.gender as '性别',student.age as '年龄' from student as s;
       --出错
  --消除重复行
select distinct gender from student;



--条件查询

  --比较运算符
  --select ... from 表名 where
    -- >
    select * from student where age >18;
    --查询大于18岁信息
    -- <
        select * from student where age <18;
    --查询小于18岁信息
    -- >=
    -- <=
    -- != 或者 <>

  --逻辑运算符
    --and
    SELECT * from student where age>18 and age<28;
    SELECT * from student where age>18 and gender='女';
    --or
    SELECT * from student where age>18 or height>=180.00;
    --not
    select *from student where not (age>18 and gender=2);
  --模糊查询
    --like
    --%替换一个或者多个或0个；_替换一个
    select name from student where name like '小_';
    select name from student where name like '小%';
    select name from student where name like '%小%';
    --查询至少三个字的名字
    select name from student where name like '___%';
    --rlike 正则
    select name from student where name rlike '^周.*$';
  -- 范围查询
    --in（）表示一个非连续范围内
    --查询年龄为18、34的姓名
    --select name,age from student where age=18 or age=34;
    select name, age from student where age in(12,18,34);
    select name, age from student where age not in(12,18,34);
    --between...and...表示一个连续范围
    --select name,age from student where age>=18 and age<=34;
    select name,age from student where age between 18 and 34;
    select name,age from student where age not between 18 and 34;
    --空判断 is null
    select * from student where height is null;
    select * from student where height is not null;



--排序
  --order by字段 asc从小到大排列，默认；desc从大到小排
  select * from student where age between 18 and 34 and gender=2 order by age;
  select * from student where age between 18 and 34 and gender=2 order by age desc;
  select * from student where age between 18 and 34 and gender=2 order by height desc;
  --order by 后面可以接多个字段，优先级顺延，即相同排序的按下一个字段排序
  select * from student where age between 18 and 34 and gender=2 order by age desc,id desc;
  select * from student where age between 18 and 34 and gender=2 order by height desc,age asc,id desc;


--聚合函数
  --总数count
  select * from student where gender=2;
  select count(*) from student where gender=2;
  select count(*) as '女性人数' from student where gender=2;
  --最大值最小值max、min
  select max(age) from student;
  --错误 select max(*) from student;
  select max(height) from student where gender =2;
  select min(age) from student;
  --求和、平均值 sum、avg
  select sum(age) from student;
  select avg(age) from student;
  select sum(age)/count(*) from student;
  --四舍五入round（123.45,1）保留一位小数
  select round(avg(age),2) from student;
  select count(name)as '女性总人数',round(avg(height),2)as '平均身高' from student where gender=2;


--分组，一般与聚合函数
  --group by
  select gender from student group by gender;
  --   select name from student group by gender;
  --   select * from student group by gender;
  --   select height from student group by gender;
  --以上三种都是错误语句，只会显示分组第一位成员相应字段信息，但是cmd中不会报错
  --计算每种性别人数，同时显现
  select gender,count(*)from student group by gender;
  select gender,count(name)from student group by gender;
  select gender,max(age)from student group by gender;
  --group_concat 分组串联显示，如显示每个性别分组中的name
  select gender,group_concat(name)as '该组成员'from student group by gender;
  select gender,group_concat(name)as '该组成员'from student where gender=2 group by gender;
  select gender,group_concat(name,age,id,height)as '该组成员'from student where gender=2 group by gender;
  select gender,group_concat(name,'-',age,'-',id,'-',height)as '该组成员'from student group by gender;
  select gender,group_concat(name,'age:',age,'id:',id,'height:',height)as '该组成员'from student group by gender;
  --having对生成的新结果（新表，例如分组或连接查询后的结果）进行条件判断
  select gender,group_concat(name)as '该组成员',round(avg (age),1)as '平均年龄'from student group by gender having avg (age)>30;
  select gender,group_concat(name)as '小组成员' from student group by gender having count(*)>=2;


--分页
  --limit start (起始数据下标，从0开始)，count（数据个数）
  select * from student where gender=2 limit 3;
  select * from student where gender=2 limit 2,3 ;
  select * from student limit 5,5;
  --limit （n-1）*每页个数，每页个数
  select * from student order by age asc limit 10,2;
  select * from student where gender=2 order by height desc limit 2;


--连接查询
  --内连接-inner join ... on
  --查询 有对应班级的学生及其班级信息
  --select * from student inner join class; 合并两个表，新表包含student.count(*)*class.count(*)个记录
  select * from student inner join class on student.class_id=class.id;
  select student.*,class.name from student inner join class on student.class_id=class.id;
  select student.name,student.age,class.name from student inner join class on student.class_id=class.id;
  select s.name,s.age,c.name from student as s  inner join class as c on s.class_id=c.id;
  select c.name,s.name,s.age from student as s  inner join class as c on s.class_id=c.id order by c.name,s.id;
  --内连接与分组不能同时用 select c.name,group_concat(s.name,s.age) from student as s  inner join class as c on s.class_id=c.id order by c.name,s.id group by c.name;
  --左连接和右连接left join 和 right join(很少用)
  --左连接以左边表为准，包含左边表的所有记录，在与右边表匹配，不匹配的记为null
  select * from student as s left join class as c on s.class_id=c.id;
  select * from class as c left join student as s on c.id=s.class_id;
  select * from student as s right join class as c on s.class_id=c.id;
  select * from student as s left join class as c on s.class_id=c.id having c.id is null;
  --也可行 但是一般用having ，原表用where select * from student as s left join class as c on s.class_id=c.id where c.id is null;


--自关联
  create table areas(
    aid int primary key,
    atitle varchar(20) COLLATE Chinese_PRC_CS_AS_WS NULL,
    pid int
  );
--子查询
  --查询最高男生信息
  select * from student where height=(select max(height) from student);
  --列级子查询
--数据库设计
  --三范式：设计数据库提出的一些规范，称为范氏（Normal Form）
    --第一范式（1NF）：强调列的原子性，即列不能再拆分
    --第二范式（2NF）：满足第一范式的基础上，1.表必须有一个主键；2.没有包含在主键中的的列必须完全依赖于所有主键，而不呢能依赖主键的一部分。
    --第三范式（3NF）：满足第二范式基础上，非主键列必须直接依赖于主键，不存在传递依赖，即不能存在：非主键A依赖于非主键B，非主键B依赖于主键的情况。
--E-R模型（实体-关系模型）
  --一对一的关系表：可以在任意一个的表内添加另一个表主键来联系对方
  --一对多的关系表：必须在多的表内出入另一张表的主键关系
  --多对多的关系表：需新建一张表，来储存两个表的主键关系，称为聚合表



