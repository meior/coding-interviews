/**
 * 判断是否为偶数
 *
 * @param {Number} number 待判断的整数
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * 将数组中的奇数放在前半部分，偶数放在后半部分
 *
 * @param {Array} array 待重排序数组
 */
function reOrderArray(array) {
  const arr = !array || array.length === 0 ? [] : array;

  let i = 0;
  let j = -1;
  const len = arr.length;
  while (i < len) {
    // 从左往右找到第一个偶数
    while (i < len && !isEven(arr[i])) {
      i++;
    }
    // 在已知偶数后面查找第一个奇数
    if (j <= i && j < len) {
      j = i + 1;
    }
    while (j < len && isEven(arr[j])) {
      j++;
    }
    if (j < len) {
      // 将i到j-1中间这部分偶数整体后移
      const tmp = arr[j];
      for (let end = j - 1; end >= i; end--) {
        arr[end + 1] = arr[end];
      }
      // 将奇数放到空缺位置
      arr[i++] = tmp;
    } else {
      break;
    }
  }
  return arr;
}

module.exports = reOrderArray;
