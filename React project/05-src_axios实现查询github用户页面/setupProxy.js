const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    proxy('/api1',{ // 遇见/api1前缀的请求，就会触发该代理
      target:'http://localhost:5000', // 目标地址
      changeOrigin:true, // 控制服务器收到的请求头的Host字段的值(浏览器看不出区别，但是服务器收到的Host字段会变，如果为true，则Host会伪装成proxy的地址)
      pathRewrite:{'^/api1':''} // 重写请求路径, 就将api1忽略
    }),
    proxy('/api2',{
      target:'http://localhost:5005',
      changeOrigin:true,
      pathRewrite:{'^/api2':''}
    })
  )
}