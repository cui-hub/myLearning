-- 视图作用：解决当数据库结构发生改变时，为了保证不用再对sql语句进行逐一修改也能查询出相同的数据。
-- 通俗来讲，视图就是一条SELECT语句执行后的返回的结果集
-- 视图就是对若干基本表的引用，一张虚拟的表，查询语句的执行结果
-- 复杂操作数据库jing_dong语句：
select g.*,gc.name as goods_cates,gb.name as goods_brands from goods as g left join goods_cates as gc on g.cate_id = gc.id left join goods_brands as gb on g.brand_id=gb.id;
-- 创造视图:
 create view v_goods_info as select g.*,gc.name as goods_cates,gb.name as goods_brands from goods as g left join goods_cates as gc on g.cate_id = gc.id left join goods_brands as gb on g.brand_id=gb.id;
-- 视图表以v_开头，只用于查询，不能增删改！！！
-- 删除视图：
drop view v_goods_info;

-- 视图的作用：
-- 1.提高重用性，类似于函数
-- 2.对数据库重构却不影响程序运行
-- 3.提高了安全性，可以对不同用户
-- 4.让数据更加清晰
