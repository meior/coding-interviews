const data = [
  // 常规操作
  {
    args: [
      {
        opt: 'push',
        val: 'a',
      },
      {
        opt: 'push',
        val: 'b',
      },
      {
        opt: 'push',
        val: 'c',
      },
      {
        opt: 'pop',
      },
      {
        opt: 'pop',
      },
      {
        opt: 'push',
        val: 'd',
      },
    ],
    expected: ['a', 'b'],
    type: 'normal',
  },
  // 对列为空时pop
  {
    args: [
      {
        opt: 'push',
        val: 'q',
      },
      {
        opt: 'push',
        val: 'w',
      },
      {
        opt: 'pop',
      },
      {
        opt: 'pop',
      },
      {
        opt: 'pop',
      },
    ],
    expected: ['q', 'w', 'Queue is empty'],
    type: 'pop empty queue',
  },
];

module.exports = data;
