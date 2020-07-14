-- 事务：他是一个操作序列，这些操作要么都执行，要么都不执行，是不可分割的工作单位
-- 事务事务四大特性（ACID）：
-- 1.原子性（Atomicity）:事务必须被视为一个不可分割的最小工作单元，对于一个事务来说不可能只执行一部分操作
-- 2.一致性（Consistence）：数据库总是从一个一致性的状态转换到另一个一致性状态。
-- 3.隔离性（Isolation）：一个事务在做的修改提交以前，对其他事物来说是不可见的，只有提交后，其他事务才会显示修改迹象
    -- 换句话说：一个数据表中的某个记录（行）在被一个事务占用时，另一个事务可以使用其他记录，但是使用该记录需要排队，等待前一个事务commit后才能进行操作
-- 4.持久性（Durability）：一旦事务提交，则其所有修改就会永久保存数据库。
-- 事务SQL样本：
start transaction;
select balance from checking where customer_id=10233276;
update checking set balance=balance-200.00 where customer_id=10233276;
update saving set balance=balance+200.00 where customer_id=10233276;
commit ;

-- 开启事务：
begin ; -- 或者
start transaction ;

-- 提交事务：
commit;

-- 回滚事务：
rollback ;
