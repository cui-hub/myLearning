const express = require('express')

const router = express.Router();
/**put、patch、delete与post的区别：
 *  共同点：都可以带数据
 *  不同点：仅仅语义不同，同一个路由，可以通过method来处理不同数据处理逻辑，方便处理
 *    post：添加数据
 *    delete：删除数据
 *    put：修改数据（覆盖式，所有key都要有，即使不修改）
 *    patch：修改数据（增量式，只需要有传需要修改的key：value）
 *    要想不区分请求方式，就可以用router.all(path, controller)
 */
const {getMsg, postMsg} = require('../controller/index.js')

router.get('/',getMsg)


router.get('/api/list',getMsg)

/**获取get请求的数据 */
router.get('/get',(req, res, next) => {

  const id = req.query.id
  console.log(id)

  res.send(`user-${id}'s page`)
  console.log('user page')
  next()
})

/**获取post请求的数据*/
router.post('/post',postMsg)

/**put请求 */
router.put('/put', (req, res, next) => {
  const data = req.body;
  console.log(data)
  res.send('put data')
})




module.exports = router;