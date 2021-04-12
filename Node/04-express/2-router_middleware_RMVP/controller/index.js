const listModel = require('../model/listModel')
const getMsg = (req, res, next) => {
  /******************* 服务端渲染页面-SSR，优点是快速，缺点是开发不方便***************/
  // let data = '<ul>'
  // for(let i = 1; i <= 100; i++){
  //   data += `<li>${i}</li>`
  // }
  // data += '</ul>'
  // res.send(data)
  // next()

  /******************* 客户端渲染页面-CSR，只返回数据，速度较慢，但是可以前后端分离***************/
  // let dataObj = {
  //   ret: true,
  //   data:[]
  // }
  // for(let i = 1; i <= 100; i++){
  //   dataObj.data.push('line' + i)
  // }
  // res.send(dataObj)

  /******************* 服务端渲染页面-SSR，利用模板art-template***************/
  
  // res.header({
  //   'content-type':'application/json; charset=utf-8'
  // })
  // res.render('list',{
  //   data: JSON.stringify(dataArr)
  // })

  res.render('list_html',{
    data: listModel.dataArr
  })
  next()
}
const postMsg = (req, res, next) => {
  const data = req.body;
  console.log(data)
  res.send(data)
}

module.exports = {
  getMsg,
  postMsg
}