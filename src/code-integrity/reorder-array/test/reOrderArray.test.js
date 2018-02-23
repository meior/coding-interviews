// 使用chai断言
const assert = require('chai').assert;
const reOrderArray = require('../reOrderArray');
const tests = require('./data');

describe('reOrderArray()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const array = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`reorder [${array}], type: ${type}`, () => {
      assert.deepEqual(reOrderArray(array), expected);
    });
  });
});
