const http = require('http');
const logger = require('../utils/log.js')
const https = require('https');



const server = http.createServer((request, response)=>{
  // logger.debug(request)

  const url = request.url;
  logger.debug(url); //    /a/s/x

  https.get('https://www.xiaomiyoupin.com/mtop/mf/resource/data/list', (res)=>{
    let data = '';
    res.on('data',(chunk) => {
      data += chunk;
    })
    res.on('end',() => {
      response.writeHead(200,{
        'content-type':'application/json;charset=utf-8'
      })
      response.write(data);
      response.end();
    })
  })




  // logger.debug(response);
})

server.listen(8090,()=>{
  console.log('localhost:8090')
})