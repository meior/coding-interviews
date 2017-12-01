const fs = require('fs');
const path = require('path');

/**
 * 异步读取文件夹下的内容
 * 将文件名保存在数组中，返回一个Promise
 * 仅返回非隐藏文件夹
 *
 * @param {String}   dir      读取的文件夹
 */
function readDir(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) reject(err);
      resolve(files.filter(file => fs.statSync(path.resolve(dir, file)).isDirectory() && file[0] !== '.'));
    });
  });
}

module.exports = {
  readDir,
};
