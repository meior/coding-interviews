// 使用chai断言
const assert = require('chai').assert;
const rectCover = require('../rectCover');
const tests = require('./data');

describe('rectCover()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const number = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`cover 2*${number} rectangle, type: ${type}`, () => {
      assert.equal(rectCover(number), expected);
    });
  });
});
