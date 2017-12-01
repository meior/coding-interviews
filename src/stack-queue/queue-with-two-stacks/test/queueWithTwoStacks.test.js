// 使用chai断言
const assert = require('chai').assert;
const Queue = require('../queueWithTwoStacks');
const tests = require('./data');

describe('queueWithTwoStacks', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const opts = test.args;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`options for queue, type: ${type}`, () => {
      const result = [];
      const queue = new Queue();
      try {
        // 循环系列操作并捕捉异常出队
        opts.forEach((opt) => {
          if (opt.opt === 'push') {
            queue.push(opt.val);
          }
          if (opt.opt === 'pop') {
            result.push(queue.pop());
          }
        });
      } catch (error) {
        result.push(error.message);
      }
      assert.deepEqual(result, expected);
    });
  });
});
