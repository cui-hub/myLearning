
-- 查找所有字段
SELECT * FROM worker

-- 查找部分字段
SELECT name,phone,area FROM worker 

-- as加别名
SELECT 
name AS '姓名',
phone AS '电话',
area AS '地域' 
FROM worker

-- as给表命名
SELECT 
name AS '姓名',
phone AS '电话',
area AS '地域' 
FROM worker AS w

SELECT 
w.name AS '姓名',
w.phone AS '电话',
w.area AS '地域' 
FROM worker AS w

-- 报错！-Unknown column 'worker.name' in 'field list'
SELECT 
worker.name AS '姓名',
worker.phone AS '电话',
worker.area AS '地域' 
FROM worker AS w

-- 消除重复行
SELECT DISTINCT authority 
FROM worker

-- 条件查询
SELECT * FROM worker WHERE birth > 2000 -- 2000年后出生
SELECT * FROM worker WHERE NOT (birth >= 2000) -- 2000年前出生
SELECT name,phone,level FROM worker WHERE birth > 2000 AND level > 1 

-- 模糊查询
SELECT name FROM worker WHERE name LIKE '明_'-- 明开头两个字符名字
SELECT name FROM worker WHERE name LIKE '明%'-- 明开头名字
SELECT name FROM worker WHERE name LIKE '%明%'-- 含有明的名字
SELECT name FROM worker WHERE name LIKE '___%'-- 至少3字符的名字

-- 范围查询
  -- in 非连续范围
SELECT name,birth FROM worker WHERE birth IN (2000,1995,1990)
SELECT name,birth FROM worker WHERE birth NOT IN (2000,1995)
  -- between and 连续范围(闭区间)
SELECT name,birth FROM worker WHERE birth BETWEEN 1995 AND 2000
  -- is (not) null (非)空
SELECT name,birth,province FROM worker WHERE province IS NOT NULL

-- 查询并排序
SELECT id,name,phone,birth,gender
FROM worker
WHERE birth BETWEEN 1990 AND 2000 AND gender='M'
ORDER BY birth DESC,id


-- 聚合函数
SELECT COUNT(*) FROM worker
SELECT COUNT(name) FROM worker 
SELECT COUNT(*) FROM worker WHERE gender='F'
SELECT DISTINCT name FROM worker

SELECT MAX(birth) FROM worker 
SELECT MIN(birth) FROM worker WHERE gender='M'

SELECT SUM(birth) FROM worker 
SELECT AVG(birth) FROM worker WHERE gender='F'

SELECT ROUND(AVG(birth),1) AS '平均出生年份' FROM worker 

-- 分组
SELECT gender FROM worker GROUP BY gender
SELECT DISTINCT gender FROM worker 
SELECT name FROM worker GROUP BY gender -- 报错
SELECT gender, COUNT(*) FROM worker GROUP BY gender

SELECT gender, GROUP_CONCAT(name) 
FROM worker 
GROUP BY gender

SELECT birth,GROUP_CONCAT(name,'-',id,'-',birth) 
AS '该年份的人员详情'
FROM worker 
GROUP BY birth
HAVING birth>1995

SELECT birth,COUNT(*) AS '总人数', 
GROUP_CONCAT(name,'-',id,'-',birth) AS '该年份的人员详情'
FROM worker 
GROUP BY birth
HAVING COUNT(*)>2

-- 分页
SELECT * FROM worker ORDER BY id LIMIT 10
SELECT * FROM worker ORDER BY id LIMIT 10,3

-- 连接查询
SELECT t.uid,t.taskId,t.checkUserId,w.name
FROM task_items_detail AS t
INNER JOIN worker AS w
ON t.checkUserId=w.id
HAVING checkUserId=577

-- 自关联
  -- 一次查询某个角色的年龄最小用户
SELECT w.id,w.name,w.birth,w.authority
FROM worker AS w
WHERE authority='demander' 
AND birth=(
	SELECT MAX(birth)
	FROM worker
	WHERE authority='demander'
)
-- 一次查询所有角色的年龄最小用户
SELECT w.id,w.name,w.birth,w.authority
FROM worker AS w
INNER JOIN (
SELECT 
	authority,
	MAX(birth) AS maxBirth
FROM worker
GROUP BY authority
) AS nw
ON w.authority=nw.authority 
AND w.birth=nw.maxBirth



-- 查看每个任务的放弃条数
SELECT taskId, COUNT(*) AS '放弃条数'
FROM task_items_error_description
WHERE sourceType=1 AND mode='ABANDON'
GROUP BY taskId

-- 每个标注员的审核通过条数(显示昵称)，并降序排列

SELECT res.*, w.name AS labelUserName
FROM(
	SELECT labelUserId, COUNT(*) AS num
	FROM task_items_detail
	WHERE checkResult=2
	GROUP BY labelUserId
)AS res 
INNER JOIN worker as w
ON res.labelUserId=w.id
ORDER BY num DESC

-- 209任务所有审核员的标注/审核数量、标注/审核速度
SELECT
	COUNT(IF(checkResult > 0 AND abandon = 0 AND reset = 0, TRUE, NULL)) 'labelAmount',
  COUNT(IF(checkResult > 1 AND abandon=0 AND reset = 0, TRUE, NULL)) 'checkAmount',
  COUNT(*) 'totalAmount',
  COUNT(IF(labelUserId IS NOT NULL AND abandon = 0 AND updatedAt>DATE_SUB(current_timestamp(), INTERVAL 5 MINUTE), TRUE, NULL)) 'labelSpeed',
  COUNT(IF(labelUserId IS NOT NULL AND checkResult > 1 AND abandon = 0 AND updatedAt>DATE_SUB(current_timestamp(), INTERVAL 5 MINUTE), TRUE, NULL)) 'checkSpeed'
FROM task_items_detail
WHERE taskId=209
