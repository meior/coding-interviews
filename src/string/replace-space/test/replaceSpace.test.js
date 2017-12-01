// 使用chai断言
const assert = require('chai').assert;
const replace = require('../replaceSpace');
const tests = require('./data');

describe('replaceSpace()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const string = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`replace space in '${string}', type: ${type}`, () => {
      assert.equal(replace(string), expected);
    });
  });
});
