const fs = require('fs')
const path = require('path')
const mime = require('mime')

/*********************同步版本 **********************/ 
function myReadFile(pathName){
  try{
    let data = fs.readFileSync(pathName);
    return data;
  }catch{
    return 'error'
  }
}
function readStaticFile(pathName, res){
  let ext = path.parse(pathName).ext;
  let mimeType = mime.getType(ext);
  let data
  // 如果文件（夹）存在，读文件
  if(fs.existsSync(pathName)){
    // 文件，直接读取
    if(ext){
      data = myReadFile(pathName);
    }else{  // 文件夹则读取默认index.xxx
      data = myReadFile(path.join(pathName, `index.${ext}`));
    }
  }else{
    data = 'PAGE NOT FOUND !'
  }
  return {
    data,
    mimeType
  };
}


/*********************异步版本 **********************/ 
function myReadFile(pathName){
  return new Promise((resolve) => {
    fs.readFile(pathName, (err, data) => {
      if(err){
        resolve('error!')
      }else{
        resolve(data)
      }
    })
  })
}
async function readStaticFile(pathName){
  let ext = path.parse(pathName).ext;
  let mimeType = mime.getType(ext);
  let data

  // 如果文件（夹）存在，读文件
  if(fs.existsSync(pathName)){
    // 文件，直接读取
    if(ext){
      data = await myReadFile(pathName);
    }else{  // 文件夹则读取默认index.xxx
      data = await myReadFile(path.join(pathName, `index.${ext}`));
    }
  }else{
    data = 'PAGE NOT FOUND !'
  }
  return {
    data,
    mimeType
  };
}

module.exports = readStaticFile