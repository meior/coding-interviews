// 使用chai断言
const assert = require('chai').assert;
const jumpFloorII = require('../jumpFloorII');
const tests = require('./data');

describe('jumpFloorII()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const number = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`super-jump to ${number} layer, type: ${type}`, () => {
      assert.equal(jumpFloorII(number), expected);
    });
  });
});
