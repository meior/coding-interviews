const data = [
  // 典型输入，单调升序的数组的一个旋转
  {
    args: [3, 4, 5, 1, 2],
    expected: 1,
    type: 'no repetitive number',
  },
  // 有重复数字，并且重复的数字刚好的最小的数字
  {
    args: [3, 4, 5, 1, 1, 2],
    expected: 1,
    type: 'minimun repetitive numbers',
  },
  // 有重复数字，但重复的数字不是第一个数字和最后一个数字
  {
    args: [3, 4, 5, 1, 2, 2],
    expected: 1,
    type: 'repetitive numbers in middle',
  },
  // 有重复的数字，并且重复的数字刚好是第一个数字和最后一个数字
  {
    args: [1, 0, 1, 1, 1],
    expected: 0,
    type: 'repetitive numbers at both ends',
  },
  // 单调升序数组，旋转0个元素，也就是单调升序数组本身
  {
    args: [1, 2, 3, 4, 5],
    expected: 1,
    type: 'itself',
  },
  // 数组中只有一个数字
  {
    args: [2],
    expected: 2,
    type: 'only one number',
  },
  // 空数组
  {
    args: [],
    expected: 0,
    type: 'empty array',
  },
];

module.exports = data;
