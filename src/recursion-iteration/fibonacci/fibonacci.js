/**
 * 求斐波那契数列的第n项
 *
 * @param  {Number} n 项数
 * @return {Number}   斐波那契数
 */
function fibonacci(n) {
  const result = [0, 1];
  if (n < 2) {
    return result[n];
  }

  let fibOne = 1;
  let fibTwo = 0;
  let fibN = 0;

  for (let i = 2; i <= n; i++) {
    fibN = fibOne + fibTwo;
    fibTwo = fibOne;
    fibOne = fibN;
  }
  return fibN;
}

module.exports = fibonacci;
