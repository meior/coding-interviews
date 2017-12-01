/**
 *  1   2   8   9
 *  2   4   9   12
 *  4   7   10  13
 *  6   8   11  15
 */
const array = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
const data = [
  // 要查找的数在数组中
  {
    args: {
      array,
      target: 7,
    },
    expected: true,
    type: 'existent',
  },
  // 要查找的数不在数组中
  {
    args: {
      array,
      target: 5,
    },
    expected: false,
    type: 'nonexistent',
  },
  // 要查找的数是数组中最小的数字
  {
    args: {
      array,
      target: 1,
    },
    expected: true,
    type: 'minimum',
  },
  // 要查找的数是数组中最大的数字
  {
    args: {
      array,
      target: 15,
    },
    expected: true,
    type: 'maxmum',
  },
  // 要查找的数比数组中最小的数字还小
  {
    args: {
      array,
      target: 0,
    },
    expected: false,
    type: 'smaller than minimum',
  },
  // 要查找的数比数组中最大的数字还大
  {
    args: {
      array,
      target: 16,
    },
    expected: false,
    type: 'larger than maxmum',
  },
  // 鲁棒性测试，输入null
  {
    args: {
      array: null,
      target: 16,
    },
    expected: false,
    type: 'robustness test for null object',
  },
];

module.exports = data;
