/* 使用chai断言 */
const assert = require('chai').assert;
const find = require('../arraySearch');
const tests = require('./data');

describe('find()', () => {
  /* 循环所有测试用例 */
  tests.data.forEach((test) => {
    const target = test.args.target;
    const array = test.args.array;
    const expected = test.expected;
    const type = test.type;

    /* 判断与预期结果是否符合 */
    it(`find ${target} in array, type: ${type}`, () => {
      assert.equal(find.find(target, array), expected);
    });
  });
});
