const fs = require('fs');

fs.writeFile('./log.txt','hello node', (err, data)=>{
  if(err){
    ;
  }else{
    console.log('文件写入成功');
  }
})