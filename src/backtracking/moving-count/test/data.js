const data = [
  {
    args: {
      threshold: 5,
      rows: 10,
      cols: 10,
    },
    expected: 21,
  },
  {
    args: {
      threshold: 15,
      rows: 20,
      cols: 20,
    },
    expected: 359,
  },
  {
    args: {
      threshold: 10,
      rows: 1,
      cols: 100,
    },
    expected: 29,
  },
  {
    args: {
      threshold: 10,
      rows: 1,
      cols: 10,
    },
    expected: 10,
  },
  {
    args: {
      threshold: 15,
      rows: 100,
      cols: 1,
    },
    expected: 79,
  },
  {
    args: {
      threshold: 15,
      rows: 10,
      cols: 1,
    },
    expected: 10,
  },
  {
    args: {
      threshold: 12,
      rows: 1,
      cols: 1,
    },
    expected: 1,
  },
  {
    args: {
      threshold: -10,
      rows: 10,
      cols: 10,
    },
    expected: 0,
  },
];

module.exports = data;
