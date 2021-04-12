# mangodb 指令
- 启动mongodb：mongo


## 数据库操作
### 查询当前数据库
  - db
### 创建/切换数据库
  - use [dbname]
### 显示所有数据库
  - show dbs
### 显示数据库状态
  - db.stats()
### 查看db版本
  - db.version()
### 查看当前db的链接机器地址
  - db.getMongo()
### 删除当前db
  - db.dropDatabase()


## 集合collection操作
### 创建一个集合
  - db.createCollection("collName", {size:[20], capped:[true], max:[100]})
### 判断集合是否为定容
  - db.[collName].isCapped()
### 得到指定名称的集合
  - db.getCollection("collName")
### 得到当前db下所有集合
  - db.getCollectionNames()
### 显示当前db所有集合状态
  - db.printCollectionStats()


## 文档Document操作
### 创建一个文档（插入数据）
  - db.[collName].insert([{key:value},{key2:value2}...])
  - db.[collName].save([{key:value},{key2:value2}...])
### 查询数据
  - db.[collName].find()
### 修改数据
  - db.[collName].update({name:'查询条件'}, {$set:{age:[newAge]}}, false, true)
  // 相当于update [collName] set age=[newAge] where name='查询条件' 第一个bool：找不到是否创建？  第二个bool：是否匹配多个？
  - db.[collName].update({name:'查询条件'}, {$inc:{age:[50]}}, false, true)
  // 相当于update [collName] set age=age + 50 where name='查询条件'
### 删除数据
  - db.[collName].remove({{name:'查询条件'}})
### 查询条件数据
  - db.[collName].find({name:'查询条件'})
  - db.[collName].find({age:{$gt:20}}) // 查询age大于(greater than)20的数据
  - db.[collName].find({age:{$lt:20}}) // 查询age小于(less than)20的数据
  - db.[collName].find({age:{$gte:20}}) // 查询agg>=(greater than&equal)20的数据
  - db.[collName].find({age:{$lte:20}}) // 查询age<=(less than&equal)20的数据
  - db.[collName].find({age:{$gte:20,$lte:24}}) // 查询agg>=(greater than&equal)20且<=24的数据
  - db.[collName].find({name:/^mongo$/}) // 正则模糊查询
  - db.[collName].find({}, {name:1, age:1}) // 第二个参数表示显示的key，1表示显示，0表示不显示，0,1不能同时出现
  - db.[collName].find().sort({age:1}) // 按照age升序排列查询
  - db.[collName].find().sort({age:1}) // 按照age升序排列查询
  - db.[collName].find().limit(5) // 仅显示前5条
  - db.[collName].find().sort({age:1}).limit(5).skip(5) // 按照age升序排序后跳过5条后显示5条（sort优先级最高，不管放到哪儿）
  - db.[collName].find({$or:[{name:'zhangsan', sex:'F'}, {age:{$gt:20}}]}) // 选择满足name=zhangsan且sex=F 或 age>20的数据
  - db.[collName].findOne({name:'查询条件'})// 查询符合条件的第一条数据
  - db.[collName].findOne({name:'查询条件'}).count()// 查询符合条件的数据的条数





### 条件查询(仅显示某个字段，且不重复)
  - db.[collName].distinct('key')