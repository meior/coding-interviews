const data = [
  // 自然顺序
  {
    args: [1, 2, 3, 4, 5, 6, 7],
    expected: [1, 3, 5, 7, 2, 4, 6],
    type: 'normal order',
  },
  // 偶数在前
  {
    args: [2, 4, 6, 1, 3, 5, 7],
    expected: [1, 3, 5, 7, 2, 4, 6],
    type: 'even in front',
  },
  // 奇数在前
  {
    args: [1, 3, 5, 7, 2, 4, 6],
    expected: [1, 3, 5, 7, 2, 4, 6],
    type: 'odd in front',
  },
  // 一个元素数组
  {
    args: [1],
    expected: [1],
    type: 'one number array',
  },
  // 空数组
  {
    args: [],
    expected: [],
    type: 'empty array',
  },
];

module.exports = data;
