// 使用chai断言
const assert = require('chai').assert;
const fibonacci = require('../fibonacci');
const tests = require('./data');

describe('fibonacci()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const number = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`n = ${number}, type: ${type}`, () => {
      assert.equal(fibonacci(number), expected);
    });
  });
});
