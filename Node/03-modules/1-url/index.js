const url = require('url');
const logger = require('../utils/log.js')


const urlStr = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
const urlObj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=3',
  search: '?id=2',
  query: 'id=2',
  pathname: '/path/index.html',
  path: '/path/index.html?id=2',
  href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
}

logger.debug(url.parse(urlStr)); 
logger.debug(url.format(urlObj)); 
logger.debug(url.resolve('http://www.abc.com/a/b','../'))
logger.debug(url.resolve('http://www.abc.com/a/b','/c'))

const urlParams = new URLSearchParams(url.parse(urlStr).search)
logger.debug(urlParams.get('id'))
