/**
 * 构造二维数组
 *
 * @param {Number} rows 数组行数
 * @param {Number} cols 数组列数
 * @param {Number} initial 元素初始值
 * @returns {Array} 构造的新数组
 */
function matrix(rows, cols, initial) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    const columns = [];
    for (let j = 0; j < cols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

/**
 * 计算整数各个数位的数字之和
 *
 * @param {Number} number 待计算的整数
 * @returns {Number} 数位和
 */
function getSum(number) {
  let res = 0;
  let num = number || 0;
  while (num > 0) {
    res += num % 10;
    num = parseInt(num / 10, 10);
  }
  return res;
}

/**
 * 回溯法主体
 *
 * @param {NUmber} i 横坐标
 * @param {NUmber} j 纵坐标
 * @param {Number} rows 矩阵行数
 * @param {Number} cols 矩阵列数
 * @param {Array} flag 解向量组
 * @param {Number} threshold 题目限制条件阀值
 * @returns {Number} 可到达点的个数
 */
function backTrack(i, j, rows, cols, flag, threshold) {
  const flags = flag || [];
  // 递归出口为整个矩阵的四个边界
  // 可到达满足两个条件：1.数位和小于阀值，2.该位置未被标记过
  if (i < 0 || i >= rows || j < 0 || j >= cols ||
    getSum(i) + getSum(j) > threshold || flags[i][j] === 1
  ) {
    return 0;
  }

  // 标记当前位置为可到达
  flags[i][j] = 1;
  // 继续递归上下左右的方格
  return backTrack(i - 1, j, rows, cols, flags, threshold) +
    backTrack(i + 1, j, rows, cols, flags, threshold) +
    backTrack(i, j - 1, rows, cols, flags, threshold) +
    backTrack(i, j + 1, rows, cols, flags, threshold) +
    1;
}

/**
 * 机器人的运动范围，采用回溯法
 *
 * @param {Number} threshold 题目限制条件阀值
 * @param {Number} rows 矩阵行数
 * @param {Number} cols 矩阵列数
 * @returns {Number} 可到达点的个数
 */
function movingCount(threshold, rows, cols) {
  const flag = matrix(rows, cols, 0);
  return backTrack(0, 0, rows, cols, flag, threshold);
}

module.exports = movingCount;
