// 使用chai断言
const assert = require('chai').assert;
const printList = require('../printListFromTailToHead');
const tests = require('./data');

describe('printListFromTailToHead()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const node = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`print list in reversed order, type: ${type}`, () => {
      assert.deepEqual(printList(node), expected);
    });
  });
});
