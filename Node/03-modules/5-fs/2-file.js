const fs = require('fs')

// 创建文件
fs.writeFile('./logs/log1.log', 'hello\nworld', (err)=>{
  if(err) throw err;
  console.log('done')
})



// 修改文件(追加内容)
fs.appendFile('./logs/log1.log','!!!!', (err) => {
  if(err) throw err;
  console.log('done')
})



// 删除文件
fs.unlink('./logs/log1.log', (err) => {
  if(err) throw err;
  console.log('done')
})



// 读取文件-->buffer
fs.readFile('./logs/log1.log', (err, content)=>{
  console.log(content) // <Buffer 68 65 6c 6c 6f 0a 77 6f 72 6c 64>
})

// 读取文件 buffer-->字符串：方法1
fs.readFile('./logs/log1.log', 'utf-8', (err, content)=>{
  console.log(content) // <Buffer 68 65 6c 6c 6f 0a 77 6f 72 6c 64>
})

// 读取文件 buffer-->字符串：方法2
fs.readFile('./logs/log1.log', (err, content)=>{
  console.log(content.toString()) // <Buffer 68 65 6c 6c 6f 0a 77 6f 72 6c 64>
})

