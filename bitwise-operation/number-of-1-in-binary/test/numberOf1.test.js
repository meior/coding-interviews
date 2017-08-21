// 使用chai断言
const assert = require('chai').assert;
const numberOf1 = require('../numberOf1');
const tests = require('./data');

describe('numberOf1()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const number = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`number 1 of ${number}, type: ${type}`, () => {
      assert.equal(numberOf1(number), expected);
    });
  });
});
