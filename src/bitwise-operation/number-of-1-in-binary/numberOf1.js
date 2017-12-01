/**
 * 计算整数的二进制表示中含有多少个1
 *
 * @param {Number} n 待计算的整数十进制表示
 */
function numberOf1(n) {
  let number = n;
  let count = 0;
  while (number) {
    /* eslint-disable no-bitwise */
    number &= number - 1;
    count++;
  }
  return count;
}

module.exports = numberOf1;
