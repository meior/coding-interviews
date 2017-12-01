/**
 * 快速幂算法
 * @param  {Number} base     底数
 * @param  {Number} exponent 指数
 * @return {Number}          幂
 */
function power(base, exponent) {
  if (base === 0 && exponent < 0) {
    throw new Error('Disallowed operation');
  }

  // 先统一按正数处理
  let result = 1;
  let baseNumber = base;
  let expNumber = Math.abs(exponent);
  while (expNumber) {
    /* eslint-disable no-bitwise */
    if (expNumber & 1) {
      result *= baseNumber;
    }
    // 加倍乘数项
    baseNumber *= baseNumber;
    expNumber >>= 1;
  }
  // 负数返回1 / result
  return exponent > 0 ? result : 1 / result;
}

module.exports = power;
