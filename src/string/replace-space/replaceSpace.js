/**
 * 将字符串中的空格都替换成"%20"
 *
 * @param  {string} str 原字符串
 * @return {string}     替换后的字符串
 */
function replaceSpace(str) {
  // 不是字符串返回null
  if (Object.prototype.toString.call(str).indexOf('String') < 0) {
    return null;
  }

  const arr = str.split('');
  let len = 0;
  let space = 0;

  // 统计有效字符与空格个数
  for (let i = 0, j = arr.length; i < j; i++) {
    len++;
    if (arr[i] === ' ') {
      space++;
    }
  }

  // 将数组中的字符向后移动
  let newLen = len + space * 2;
  while (len >= 0 && newLen >= 0) {
    if (arr[len] === ' ') {
      arr[newLen--] = '0';
      arr[newLen--] = '2';
      arr[newLen--] = '%';
    } else {
      arr[newLen--] = arr[len];
    }
    len--;
  }

  return arr.join('');
}

module.exports = replaceSpace;
