const fs = require('fs')

// for(let i = 0; i < 10; i++){
//   fs.writeFile(`./logs/log-${i}.log`,`log-${i}`, (err) => {
//     if (err) throw err;
//     console.log(`${i}done`)
//   })
// }

// 遍历文件-异步
function readDir(dir){
  fs.readdir(dir, (err, content) => {
    content.forEach((name, i) => {
      let joinDir = `${dir}/${name}`

      fs.stat(joinDir, (err, stat) => {
        if(stat.isDirectory()){
          readDir(joinDir);
        }else{
          fs.readFile(joinDir, (err,content) => {
            console.log(content.toString())
          })
        }
      })
    })
  })
}

readDir('./logs')

