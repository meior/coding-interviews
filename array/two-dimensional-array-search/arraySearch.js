/**
 * 在二维有序数组中查找元素
 * 数组每一行右递增，每一列下递增
 * 
 * @param  {Number}  target 查找目标
 * @param  {Array}   array  查找数组
 * @return {Boolean}        是否找到目标
 */
function find(target, array) {
  // 不是数组返回false
  if (Object.prototype.toString.call(array).indexOf('Array') < 0) {
    return false;
  }

  // 从矩阵右上角开始
  let i = 0;
  let j = array[i].length - 1;
  // 一直搜索到左下角
  while (i < array.length && j >= 0) {
    if (array[i][j] < target) {
      i++;
    } else if (array[i][j] > target) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}

module.exports = find;
