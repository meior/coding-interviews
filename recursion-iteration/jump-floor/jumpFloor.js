/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */

/**
 * 一次可以跳上1级台阶，也可以跳上2级
 * 计算到达第n级台阶的跳法数
 * @param  {Number} number 终点台阶数
 * @return {Number}        跳法数
 */
function jumpFloor(number) {
  const steps = [0, 1, 2];
  if (number < 3) {
    return steps[number];
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

module.exports = jumpFloor;
