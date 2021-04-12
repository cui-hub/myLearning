const express= require('express')

const app = express();


/**1. express 的use()方法设置路由，有优先匹配原则，先加入的中间件能够优先匹配 */


/**2. 回调函数又称为中间件，可以同时添加多个，但要注意前一个要运行next() */

const middlewares = [ 
  (req, res, next) => {
    console.log(0);
    next()
}, (req, res, next) => {
    console.log(1);
    next()
}, (req, res, next) => {
    console.log(2);
    next()
}]

/**3. 关于中间件队列：express匹配路由后，会按照顺序将所有符合匹配条件的中间件
 * 添加到队列当中，并先后运行中间件函数，通过next()将运行串联起来，
 * 如果没有next()，则后续中间件不会运行
 */
app.use('/',middlewares)

app.use('/api', (req, res) => {
  console.log('api')
  res.send('api')
})

app.use('/ajax', (req, res) => {
  console.log('ajax')
  res.send('ajax')
})


app.listen(8080,() => {
  console.log('localhost:8080')
})