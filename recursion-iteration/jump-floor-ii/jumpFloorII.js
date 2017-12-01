/**
 * 一次可以跳1级台阶，也可以跳2级，也可以跳n级
 * 计算到达第n级台阶的跳法数
 * @param  {Number} number 终点台阶数
 * @return {Number}        跳法数
 */
function jumpFloorII(number) {
  // return 1 << --number;
  // return number === 1 ? 1 : 2 * jumpFloorII(number - 1);

  const steps = [0, 1, 2];
  if (number < 3) {
    return steps[number];
  }

  let previous = 2;
  let current = 1;
  for (let i = 3; i <= number; i++) {
    current = 2 * previous;
    previous = current;
  }
  return current;
}

module.exports = jumpFloorII;
