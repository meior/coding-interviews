const data = [
  // 底数、指数都为正数
  {
    args: {
      base: 2,
      exponent: 3,
    },
    expected: 8,
    type: 'both positive number',
  },
  // 底数为负数、指数为正数
  {
    args: {
      base: -2,
      exponent: 3,
    },
    expected: -8,
    type: 'negative base and positive exponent',
  },
  // 底数为正数、指数为负数
  {
    args: {
      base: 2,
      exponent: -3,
    },
    expected: 0.125,
    type: 'positive base and negative exponent',
  },
  // 指数为0
  {
    args: {
      base: 2,
      exponent: 0,
    },
    expected: 1,
    type: 'zero exponent',
  },
  // 底数、指数都为0
  {
    args: {
      base: 0,
      exponent: 0,
    },
    expected: 1,
    type: 'both zero',
  },
  // 底数为0、指数为正数
  {
    args: {
      base: 0,
      exponent: 4,
    },
    expected: 0,
    type: 'zero base and positive exponent',
  },
  // 底数为0、指数为负数
  {
    args: {
      base: 0,
      exponent: -4,
    },
    expected: 'Disallowed operation',
    type: 'zero base and positive exponent',
  },
];

module.exports = data;
