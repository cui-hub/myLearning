const fs = require('fs')
const mime = require('mime')
require('http')
  // .createServer((req, res) => {
  //   const urlStr = req.url;

  //   console.log(urlStr)
  //   switch(urlStr){
  //     case '/':
  //       res.end('hello');
  //       break;
  //     case '/home':
  //       fs.readFile('./static/home.html', (err, content) => {
  //         res.end(content)
  //       })
  //       break;
  //     case '/home.js':
  //       fs.readFile('./static/home.js', (err, content) => {
  //         res.end(content)
  //       })
  //       break;
  //     case '/fengche.png':
  //       fs.readFile('./static/fengche.png', (err, content) => {
  //         res.end(content)
  //       })
  //       break;
  //     default:
  //       res.end('404 page not found')
  //   }
  // })
  .createServer((req, res) => {
    const urlStr = req.url;
    const type = mime.getType(urlStr.split('.')[1]);
    res.writeHead(200,{
      'content-type':type
    })
    const file = fs.readFileSync(`./static/${urlStr}`);
    res.end(file)
  })
  .listen(8080,() => {
    console.log('localhost:8080')
  })