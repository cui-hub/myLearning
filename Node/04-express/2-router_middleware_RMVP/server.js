const express = require('express')
const router = require('./router/index.js')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

// 用来解析post请求中application/x-www-form-urlencoded格式的数据,要放在路由中间件之前
app.use(bodyParser.urlencoded({extended: false}))

// 用来解析post请求中application/json格式的数据,要放在路由中间件之前
app.use(bodyParser.json())

// 静态资源中间件
app.use(express.static('./public'))

// view engine setup（art-template插件设置）
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape:false
});
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'art');

/**express中use()方法与router.get()等路由方法的区别就是url的匹配机制，前者模糊匹配，后者严格匹配 */
app.use('/', router)


app.listen(8080,() => {
  console.log('localhost:8080')
})