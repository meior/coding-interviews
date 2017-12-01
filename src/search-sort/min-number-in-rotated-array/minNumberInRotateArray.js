/**
 * 顺序查找旋转数组最小元素
 * 分界点即为最小元素
 *
 * @param  {Array}  rotateArray 非递减数组的旋转
 * @return {Number}             最小的元素或者0（空数组）
 */
function searchInOrder(rotateArray) {
  if (rotateArray.length === 0) {
    return 0;
  }

  for (let i = 0; i < rotateArray.length - 1; i++) {
    if (rotateArray[i] > rotateArray[i + 1]) {
      return rotateArray[i + 1];
    }
  }
  return rotateArray[0];
}

/**
 * 利用二分法求旋转数组的最小元素
 * 如果中间元素与两端元素都相等，只能采取顺序遍历查找
 *
 * @param  {Array} rotateArray 非递减数组的旋转
 * @return {Number}            最小的元素或者0（空数组）
 */
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) {
    return 0;
  }

  let left = 0;
  let right = rotateArray.length - 1;
  let mid = 0;

  while (rotateArray[left] >= rotateArray[right]) {
    if (right - left === 1) {
      mid = right;
      break;
    }

    mid = left + Math.floor((right - left) / 2);
    if (rotateArray[left] === rotateArray[right] && rotateArray[left] === rotateArray[mid]) {
      return searchInOrder(rotateArray);
    }

    if (rotateArray[mid] >= rotateArray[left]) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return rotateArray[mid];
}

module.exports = minNumberInRotateArray;
