/**
 * 求矩阵的覆盖方法
 * 
 * @param  {Number} number 矩阵列数
 * @return {Number}        方法总数
 */
function rectCover(number) {
  const methods = [0, 1, 2];
  if (number < 3) {
    return methods[number];
  }

  let fibOne = 2;
  let fibTwo = 1;
  let fibN = 0;

  for (let i = 3; i <= number; i++) {
    fibN = fibOne + fibTwo;
    fibTwo = fibOne;
    fibOne = fibN;
  }
  return fibN;
}

module.exports = rectCover;
