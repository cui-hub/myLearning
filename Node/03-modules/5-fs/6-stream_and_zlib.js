const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./logs/log-r.txt');
const writeStream = fs.createWriteStream('./logs/log-w.gzip');

readStream.pipe(gzip).pipe(writeStream)
// 详细理解及源码请见https://www.jianshu.com/p/4eb9077a8956 ； https://www.jianshu.com/p/1d36648fb87e ； https://www.jianshu.com/p/43ea707826b8
