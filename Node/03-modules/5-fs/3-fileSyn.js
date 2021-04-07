const fs = require('fs')
const fsP = require('fs').promises


// 异步
fs.readFile('./logs/log1.log', (err, content)=>{
  console.log(content) // <Buffer 68 65 6c 6c 6f 0a 77 6f 72 6c 64>
})
console.log('continue....')


// // 同步
const content = fs.readFileSync('./logs/log1.log')
console.log(content.toString())
console.log('continue2....')


// 异步:promises
// asyn-await
;(async() => {
  let content= await fsP.readFile('./logs/log1.log');
  console.log(content.toString())
})()
// promise
fsP.readFile('./logs/log1.log').then(content=>{
  console.log(content.toString());
}).catch(err=>{
  throw err;
})
