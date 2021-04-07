const http = require('http');
const url = require('url')
const logger = require('../utils/log.js')

const server = http.createServer((req, res) => {
  let urlObj = url.parse(req.url, true);
  console.log(urlObj)
  switch (urlObj.pathname) {
    case '/api/data':
      res.writeHead(200,{
        'content-type':'application/jsonp',
        'Access-Control-Allow-Origin':'*'
      })
      res.write('{"name":"cyl"}');
      break;
  
    default:
      res.write('page not found');
  }
  res.end();
})

server.listen(8090,() => {
  console.log('localhost:8090')
})