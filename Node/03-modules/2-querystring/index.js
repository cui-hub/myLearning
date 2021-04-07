const querystring = require('querystring');
const logger = require('../utils/log.js')


const query = 'id=2&name=cyl&from=河北';
const query2 = 'id:2/name:cyl/from:河北';
const queryEscape = 'id%3D2%26name%3Dcyl%26from%3D%E6%B2%B3%E5%8C%97';
const queryObj = { id: '2', name: 'cyl', from: '河北' };

logger.debug(querystring.parse(query)); // { id: '2', name: 'cyl', from: '河北' }
logger.debug(querystring.escape(query)); // id%3D2%26name%3Dcyl%26from%3D%E6%B2%B3%E5%8C%97
logger.debug(querystring.unescape(queryEscape)); // id=2&name=cyl&from=河北
logger.debug(querystring.stringify(queryObj)); // id=2&name=cyl&from=%E6%B2%B3%E5%8C%97 中文无法显示
logger.debug(querystring.parse(query2, '/', ':')); // { id: '2', name: 'cyl', from: '河北' }
const newQuery = querystring.stringify(queryObj, null, null,{
  encodeURIComponent(string){
    return querystring.unescape(string);
  }
})
logger.debug(newQuery); // id=2&name=cyl&from=河北 中文正常显示