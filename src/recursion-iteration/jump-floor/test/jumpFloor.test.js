// 使用chai断言
const assert = require('chai').assert;
const jumpFloor = require('../jumpFloor');
const tests = require('./data');

describe('jumpFloor()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const number = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`jump to ${number} layer, type: ${type}`, () => {
      assert.equal(jumpFloor(number), expected);
    });
  });
});
