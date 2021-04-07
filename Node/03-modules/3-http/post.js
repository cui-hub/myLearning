const http = require('http');
const querystring = require('querystring')
const logger = require('../utils/log.js')

const postData =querystring.stringify({
  name:'cyl',
  id:2,
  age:26,
  from:'河北'
})

const options = {
  protocol:'http:',
  hostname:'localhost',
  method:'post',
  port:3000,
  path:'/data',
  headers:{
    'content-type':'application/x-www-form-urlencoded',
    'Content-length':Buffer.byteLength(postData)
  }
}
const server = http.createServer((request, response)=>{
  const request = http.request(options,(result) => {
    // TODO
  })
  request.write(postData);
  request.end();

  response.end('ok');
})

server.listen(8090,()=>{
  console.log('localhost:8090')
})