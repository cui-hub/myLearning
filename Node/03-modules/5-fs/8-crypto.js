const crypto = require('crypto')

const pwd = 'abc123';


const hash = crypto
  .createHash('sha1') // 加密算法
  .update(pwd, 'utf-8') // 加密对象
  .digest('hex') //16进制

console.log(hash)