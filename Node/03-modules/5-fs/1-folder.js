const fs = require('fs')


// 创建文件夹
fs.mkdir('folder', (err)=>{
  if(err){
    throw err;
  }else{
    console.log('文件夹创建成功')
  }
})

// 修改文件(夹)名
fs.rename('./folder','./folders', (err)=>{
  if(err) throw err;
  console.log('修改文件名成功')
})

// 删除文件夹,(非空文件夹删除会报错)
fs.rmdir('./folder', (err)=>{
  if(err) throw err;
  console.log('文件夹删除成功');
})

// 遍历文件夹
fs.readdir('./folder', (err, res) => {
  if(err) throw err;
  console.log('文件夹遍历成功',res)
})