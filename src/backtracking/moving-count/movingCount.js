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

function getSum(number) {
  let res = 0;
  let num = number || 0;
  while (num > 0) {
    res += num % 10;
    num = parseInt(num / 10, 10);
  }
  return res;
}

function backTrack(i, j, rows, cols, flag, threshold) {
  const flags = flag || [];
  if (i < 0 || i >= rows || j < 0 || j >= cols ||
    getSum(i) + getSum(j) > threshold || flags[i][j] === 1
  ) {
    return 0;
  }

  flags[i][j] = 1;
  return backTrack(i - 1, j, rows, cols, flags, threshold) +
    backTrack(i + 1, j, rows, cols, flags, threshold) +
    backTrack(i, j - 1, rows, cols, flags, threshold) +
    backTrack(i, j + 1, rows, cols, flags, threshold) +
    1;
}

function movingCount(threshold, rows, cols) {
  const flag = matrix(rows, cols, 0);
  return backTrack(0, 0, rows, cols, flag, threshold);
}

module.exports = movingCount;
