const data = [
  /* 正常句子表现形式 */
  {
    args: 'We Are Happy',
    expected: 'We%20Are%20Happy',
    type: 'normal',
  },
  /* 句子前有一个空格 */
  {
    args: ' We Are Happy',
    expected: '%20We%20Are%20Happy',
    type: 'front',
  },
  /* 句子前后均有空格 */
  {
    args: ' We Are Happy ',
    expected: '%20We%20Are%20Happy%20',
    type: 'front & behind',
  },
  /* 多个空格相连 */
  {
    args: ' We  Are   Happy ',
    expected: '%20We%20%20Are%20%20%20Happy%20',
    type: 'serial',
  },
  /* 全是空格 */
  {
    args: '      ',
    expected: '%20%20%20%20%20%20',
    type: 'all space',
  },
  /* 鲁棒性测试，输入非字符串 */
  {
    args: 123,
    expected: null,
    type: 'robustness test for not string',
  },
];

module.exports = {
  data,
};
