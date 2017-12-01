// 使用chai断言
const assert = require('chai').assert;
const search = require('../minNumberInRotateArray');
const tests = require('./data');

describe('minNumberInRotateArray()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const array = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`search minimum number in [${array}], type: ${type}`, () => {
      assert.equal(search(array), expected);
    });
  });
});
