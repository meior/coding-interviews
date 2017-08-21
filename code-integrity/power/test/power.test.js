// 使用chai断言
const assert = require('chai').assert;
const power = require('../power');
const tests = require('./data');

describe('power()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const base = test.args.base;
    const exponent = test.args.exponent;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`calculate ${base}^${exponent}, type: ${type}`, () => {
      if (type !== 'zero base and positive exponent') {
        assert.equal(power(base, exponent), expected);
      } else {
        // 处理异常结果
        try {
          power(base, exponent);
        } catch (error) {
          assert.equal(error.message, expected);
        }
      }
    });
  });
});
