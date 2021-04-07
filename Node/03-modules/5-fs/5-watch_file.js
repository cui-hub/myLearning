const fs = require('fs')

// 监视文件改动变化-改名和删改内容，测试新建也可以
fs.watch('./logs/log-2.log', (err) => {
  console.log('changed')
})


// watchFile与watch用法一样,但是兼容性更好，具体区别见文档
fs.watchFile('./logs/log-2.log', (err) => {
  console.log('changed')
})