const data = [
  // 常规数据
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
    args: 2,
    expected: 2,
    type: 'normal',
  },
  {
    args: 3,
    expected: 3,
    type: 'normal',
  },
  {
    args: 4,
    expected: 5,
    type: 'normal',
  },
  {
    args: 5,
    expected: 8,
    type: 'normal',
  },
  {
    args: 6,
    expected: 13,
    type: 'normal',
  },
  // 大数据
  {
    args: 23,
    expected: 46368,
    type: 'big number',
  },
  {
    args: 40,
    expected: 165580141,
    type: 'big number',
  },
  {
    args: 45,
    expected: 1836311903,
    type: 'big number',
  },
];

module.exports = data;
