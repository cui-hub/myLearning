create database jing_dong charset utf8;

use jing_dong;

create table orign_goods(
    id int unsigned primary key auto_increment not null,
    name varchar(150) not null,
    catte_name varchar(40) not null,
    brand_name varchar(40) not null,
    price decimal(10,3) not null default 0,
    is_show bit not null default 1,
    is_saleoff bit not null default 0
);

insert into orign_goods values(0,'r510vc 15.6英寸笔记本','笔记本','华硕','3399',default,default);
insert into orign_goods values(0,'y400n 14.8英寸笔记本','笔记本','联想','4999',default,default);
insert into orign_goods values(0,'g150th 15.6英寸笔记本','游戏本','雷神','8499',default,default);
insert into orign_goods values(0,'x550cc 15.6英寸笔记本','笔记本','华硕','2799',default,default);
insert into orign_goods values(0,'x240 超极本','超极本','联想','4880',default,default);
insert into orign_goods values(0,'u330p 13.3英寸笔记本','超极本','联想','4299',default,default);
insert into orign_goods values(0,'svp13226scb 触控超极本','超极本','索尼','7999',default,default);
insert into orign_goods values(0,'ipad mini 7.9英寸平板电脑','平板电脑','苹果','1998',default,default);
insert into orign_goods values(0,'ipad air 9.7英寸平板电脑','平板电脑','苹果','3388',default,default);
insert into orign_goods values(0,'ipad mini 配备retina显示屏','平板电脑','苹果','2788',default,default);
insert into orign_goods values(0,'ideacenter c340 20英寸一体电脑','台式机','联想','3499',default,default);
insert into orign_goods values(0,'vostro 3800-r1206 台式电脑','台式机','戴尔','2899',default,default);
insert into orign_goods values(0,'imac mc086ch/a 21.5英寸一体电脑','台式机','苹果','9188',default,default);
insert into orign_goods values(0,'at7-7414lp 台式电脑 linux','台式机','宏碁','3699',default,default);
insert into orign_goods values(0,'z220sff f4f06pa工作站','服务器/工作站','惠普','4288',default,default);
insert into orign_goods values(0,'poweredge ii服务器','服务器/工作站','戴尔','5388',default,default);
insert into orign_goods values(0,'mac pro专业级台式电脑','服务器/工作站','苹果','28888',default,default);
insert into orign_goods values(0,'hmz-t3w 头戴显示设备','笔记本配件','索尼','6999',default,default);
insert into orign_goods values(0,'商务双肩背包','笔记本配件','索尼','99',default,default);
insert into orign_goods values(0,'x3250 m4机架式服务器','服务器/工作站','ibm','6888',default,default);
insert into orign_goods values(0,'商务双肩背包','笔记本配件','索尼','99',default,default);
insert into orign_goods values(0,'老李','笔记本','老王','4999',default,default);

create table goods(
    id int unsigned primary key auto_increment not null,
    name varchar(150) not null,
    catte_name varchar(40) not null,
    brand_name varchar(40) not null,
    price decimal(10,3) not null default 0,
    is_show bit not null default 1,
    is_saleoff bit not null default 0
);

insert into goods values(0,'r510vc 15.6英寸笔记本','笔记本','华硕','3399',default,default);
insert into goods values(0,'y400n 14.8英寸笔记本','笔记本','联想','4999',default,default);
insert into goods values(0,'g150th 15.6英寸笔记本','游戏本','雷神','8499',default,default);
insert into goods values(0,'x550cc 15.6英寸笔记本','笔记本','华硕','2799',default,default);
insert into goods values(0,'x240 超极本','超极本','联想','4880',default,default);
insert into goods values(0,'u330p 13.3英寸笔记本','超极本','联想','4299',default,default);
insert into goods values(0,'svp13226scb 触控超极本','超极本','索尼','7999',default,default);
insert into goods values(0,'ipad mini 7.9英寸平板电脑','平板电脑','苹果','1998',default,default);
insert into goods values(0,'ipad air 9.7英寸平板电脑','平板电脑','苹果','3388',default,default);
insert into goods values(0,'ipad mini 配备retina显示屏','平板电脑','苹果','2788',default,default);
insert into goods values(0,'ideacenter c340 20英寸一体电脑','台式机','联想','3499',default,default);
insert into goods values(0,'vostro 3800-r1206 台式电脑','台式机','戴尔','2899',default,default);
insert into goods values(0,'imac mc086ch/a 21.5英寸一体电脑','台式机','苹果','9188',default,default);
insert into goods values(0,'at7-7414lp 台式电脑 linux','台式机','宏碁','3699',default,default);
insert into goods values(0,'z220sff f4f06pa工作站','服务器/工作站','惠普','4288',default,default);
insert into goods values(0,'poweredge ii服务器','服务器/工作站','戴尔','5388',default,default);
insert into goods values(0,'mac pro专业级台式电脑','服务器/工作站','苹果','28888',default,default);
insert into goods values(0,'hmz-t3w 头戴显示设备','笔记本配件','索尼','6999',default,default);
insert into goods values(0,'商务双肩背包','笔记本配件','索尼','99',default,default);
insert into goods values(0,'x3250 m4机架式服务器','服务器/工作站','ibm','6888',default,default);
insert into goods values(0,'商务双肩背包','笔记本配件','索尼','99',default,default);
insert into goods values(0,'老李','笔记本','老王','4999',default,default);

# 查询每种类型中最贵的电脑信息
select goods.*,new_goods.max_price from goods inner join(
    select
    catte_name,
    max(price) as max_price,
    min(price) as min_price,
    avg(price) as avg_price,
    count(*) as count_number
    from goods group by catte_name
    )as new_goods on goods.catte_name=new_goods.catte_name and goods.price=new_goods.max_price;


# 将goods表中的catte_name与另一张表goods_cates关联，并设置外键
create table if not exists goods_cates(
    id int unsigned primary key auto_increment,
    name varchar(40) not null
);
# 1.将goods表中的cate_name插入goods_cates中
insert into goods_cates(name)select goods.catte_name from goods group by catte_name;
# 2.同步数据表
update goods as g inner join goods_cates as c  on g.catte_name = c.name set g.catte_name=c.id;
# 3.同步字段数据类型
alter table goods change catte_name cate_id int unsigned not null;
# 4.设置外键
alter table goods add foreign key (cate_id)references goods_cates(id);
insert into goods_cates(name) values('路由器'),('交换机'),('网卡');


# 将goods表中的brand_name与另一张表goods_brands关联，并设置外键
create table if not exists goods_brands(
    id int unsigned primary key auto_increment,
    name varchar(40) not null
);
insert into goods_brands(name)select distinct goods.brand_name from goods;
# 创建和插入数据可以用一句话代替：
# create table if not exists goods_brands(
#     id int unsigned primary key auto_increment,
#     name varchar(40) not null
# ) select distinct goods.brand_name as name from goods;

update goods as g inner join goods_brands as b on g.brand_name=b.name set g.brand_name=b.id;
alter table goods change brand_name brand_id int unsigned not null;
alter table goods add foreign key (brand_id) references goods_brands(id);

# 取消外键
show create table goods;
alter table goods drop foreign key goods_ibfk_1;
alter table goods drop foreign key goods_ibfk_2;


create table customers(
    id int unsigned not null primary key auto_increment,
    name varchar(40) not null,
    address varchar(40) not null,
    tel int not null,
    passwd varchar(12) not null
);

create table table_detail(
    id int unsigned not null primary key auto_increment,
    order_id int unsigned not null,
    good_id int unsigned not null,
    quantity int unsigned not null
);