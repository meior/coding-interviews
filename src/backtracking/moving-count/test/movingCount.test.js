// 使用chai断言
const assert = require('chai').assert;
const movingCount = require('../movingCount');
const tests = require('./data');

describe('movingCount()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const threshold = test.args.threshold;
    const rows = test.args.rows;
    const cols = test.args.cols;
    const expected = test.expected;

    // 判断与预期结果是否符合
    it(`matrix: ${rows}x${cols}, threshold: ${threshold}, expected: ${expected}`, () => {
      assert.equal(movingCount(threshold, rows, cols), expected);
    });
  });
});
