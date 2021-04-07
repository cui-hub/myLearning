const _ = require('lodash');

function myChunk (arr){
  let arr2 = _.chunk(arr);
  return arr2
}

module.exports = myChunk