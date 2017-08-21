// 使用chai断言
const assert = require('chai').assert;
const construct = require('../rebuildBinaryTree');
const tests = require('./data');

let postorder = [];
/**
 * 二叉树后序遍历
 * 用以验证构造的二叉树的正确性
 * 
 * @param   {TreeNode} root 二叉树根节点
 * @returns {Array}         后序遍历结果
 */
function traverseTreePostorder(root) {
  if (!root) {
    return [];
  }

  if (root.left !== null) {
    traverseTreePostorder(root.left);
  }
  if (root.right !== null) {
    traverseTreePostorder(root.right);
  }
  postorder.push(root.val);
  return postorder;
}

describe('reConstructBinaryTree()', () => {
  // 循环所有测试用例
  tests.forEach((test) => {
    const preorder = test.args.preorder;
    const inorder = test.args.inorder;
    const expected = test.expected;
    const type = test.type;

    // 判断与预期结果是否符合
    it(`construct tree with preorder [${preorder}] & inorder [${inorder}], type: ${type}`, () => {
      let tree = [];
      postorder = [];

      // 正确匹配的测试序列
      if (type !== 'unmatched sequence') {
        tree = construct(preorder, inorder);
        assert.deepEqual(traverseTreePostorder(tree), expected);
      } else {
        // 捕捉序列不匹配异常
        try {
          tree = construct(preorder, inorder);
        } catch (error) {
          assert.equal(error.message, expected);
        }
      }
    });
  });
});
