const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

const server = http.createServer((req, res)=>{
  let data = ''
  https.get('https://www.meizu.com', (result)=>{
    result.on('data',(chunk)=>{
      data += chunk;
    })

    result.on('end',()=>{
      filterData(data)
    })
  })
})

function filterData(data){
  const $ = cheerio.load(data);
  $('.section-item-box p').each((i, el)=>{
    console.log(i,$(el).text())
  })
  // console.log(data)
}

server.listen(8090,()=>{
  console.log('localhost:8090')
})