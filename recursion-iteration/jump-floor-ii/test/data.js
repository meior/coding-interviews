const data = [
  // 常规数据
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
    expected: 4,
    type: 'normal',
  },
  {
    args: 4,
    expected: 8,
    type: 'normal',
  },
  {
    args: 5,
    expected: 16,
    type: 'normal',
  },
  {
    args: 6,
    expected: 32,
    type: 'normal',
  },
  // 大数据
  {
    args: 23,
    expected: 4194304,
    type: 'big number',
  },
  {
    args: 30,
    expected: 536870912,
    type: 'big number',
  },
];

module.exports = data;
