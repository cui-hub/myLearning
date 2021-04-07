const http = require('http');
const url = require('url')
const logger = require('../utils/log.js')
const {createProxyMiddleware} = require('http-proxy-middleware')

const server = http.createServer((req, res) => {
  const urlStr = req.url;

  // 如果以'/api'开头的路径就会进入代理
  if(/^\/api/.test(urlStr)){
    console.log(urlStr);
    const proxy = createProxyMiddleware('/api', {
      target:'https://movie.douban.com',
      changeOrigin:true,
      pathRewrite:{
        '^/api':'/j'
      }
      // 代理路径：https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%BE%8E%E5%89%A7&page_limit=50&page_start=0
    })
    proxy(req,res);
  }else{
    console.log('error')
  }
})

server.listen(8090,() => {
  console.log('localhost:8090')
})