/**
 * 二叉树节点构造函数
 *
 * @param {Number} x 节点值
 */
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * 根据二叉树前序和中序遍历结果，递归构造二叉树
 *
 * @param  {Array}    pre 前序遍历结果数组
 * @param  {Array}    vin 中序遍历结果数组
 * @return {TreeNode}     构造的二叉树
 */
function reConstructBinaryTree(pre, vin) {
  let root = {};

  if (pre.length <= 0) {
    root = null;
  } else {
    // 第一个元素为根节点
    const val = pre[0];
    root = new TreeNode(val);

    // 序列只有一个元素，到达叶子节点
    if (pre.length === 1) {
      if (vin.length !== 1 || pre[0] !== vin[0]) {
        throw new Error('Invalid input');
      } else {
        return root;
      }
    }

    // 不匹配异常
    const index = vin.indexOf(val);
    if (index < 0) {
      throw new Error('Invalid input');
    }

    // 递归构造左子树
    const leftPre = pre.slice(1, index + 1);
    const leftVin = vin.slice(0, index);
    root.left = reConstructBinaryTree(leftPre, leftVin);

    // 递归构造右子树
    const rightPre = pre.slice(index + 1);
    const rightVin = vin.slice(index + 1);
    root.right = reConstructBinaryTree(rightPre, rightVin);
  }
  return root;
}

module.exports = reConstructBinaryTree;
