const data = [
  // 较小正整数
  {
    args: 0,
    expected: 0,
    type: 'normal',
  },
  {
    args: 1,
    expected: 1,
    type: 'normal',
  },
  {
    args: 10,
    expected: 2,
    type: 'normal',
  },
  // 最大负整数
  {
    args: -1,
    expected: 32,
    type: 'maximum negative number',
  },
  // 最小负整数
  {
    args: -2147483648,
    expected: 1,
    type: 'minimum negative number',
  },
  // 最大正整数
  {
    args: 2147483647,
    expected: 31,
    type: 'maximum positive number',
  },
];

module.exports = data;
