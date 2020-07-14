-- 索引：一种特殊的文件（InnoDB数据表上的索引是表空间的一个组成部分），它们包含着对数据表里所有记录的引用探针，就好比一本书前面的目录
-- 示例：
create table test_index(title varchar(10));
-- 通过Python插入100000条数据

-- 开启时间监控：
set profiling =1;
-- 查找第十万条数据；
select * from test_index where title='ha-99999';
-- 查看运行时间
show profiles ;
-- 为表test_index 的title列创建索引：
create index title_index on test_index(title(10));


-- 索引查询原理：
  -- 与字典查询方式相似，把数据分段，通过不断缩小范围来筛选数据
  -- create index 索引名称 on 表名（字段名（长度）） int类型可以不用写长度
-- 查看表中索引情况
show index from test_index;
-- 主键和外键都是索引！
-- 删除索引
drop index 索引名 on 表名；

-- 需要注意的是，建立太多的索引会影响更新的插入的速度，而且占用磁盘空间
