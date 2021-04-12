const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')

/*********************同步版本 **********************/ 
http.createServer((req, res) => {

  let urlStr = req.url;
  // path.resolve(__dirname)当前代码所在的物理路径
  let pathName = path.join(__dirname, '/public', urlStr);

  const {data, mimeType} = readStaticFile(pathName);
  // console.log(data)
  res.writeHead(200,{
    'content-type':mimeType
  })
  res.write(data);
  res.end();
})
  .listen(8080,() => {
    console.log('localhost:8080')
  })

/*********************异步版本 **********************/ 
http.createServer(async(req, res) => {

  let urlStr = req.url;
  // path.resolve(__dirname)当前代码所在的物理路径
  let pathName = path.join(__dirname, '/public', urlStr);

  const {data, mimeType} = await readStaticFile(pathName, res);
  // console.log(data)

  res.writeHead(200,{
    'content-type':mimeType
  })

  res.write(data);
  res.end();
})
  .listen(8080,() => {
    console.log('localhost:8080')
  })