const http = require('http');
const url = require('url')
const logger = require('../utils/log.js')

const server = http.createServer((req,res)=>{
  let urlObj = url.parse(req.url, true);
  // console.log(urlObj)
  switch (urlObj.pathname) {
    case '/api/data':
      res.write(`${urlObj.query.cb}('hello')`);
      break;
  
    default:
      res.write('page not found');
  }
  res.end();
})

server.listen(8090,() => {
  console.log('localhost:8090')
})