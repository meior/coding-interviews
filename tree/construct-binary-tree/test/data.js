const data = [
  // 普通二叉树
  //              1
  //           /     \
  //          2       3  
  //         /       / \
  //        4       5   6
  //         \         /
  //          7       8
  {
    args: {
      preorder: [1, 2, 4, 7, 3, 5, 6, 8],
      inorder: [4, 7, 2, 1, 5, 3, 8, 6],
    },
    expected: [7, 4, 2, 5, 8, 6, 3, 1],
    type: 'normal',
  },
  // 所有结点都没有右子结点
  //            1
  //           / 
  //          2   
  //         / 
  //        3 
  //       /
  //      4
  //     /
  //    5
  {
    args: {
      preorder: [1, 2, 3, 4, 5],
      inorder: [5, 4, 3, 2, 1],
    },
    expected: [5, 4, 3, 2, 1],
    type: 'no right child',
  },
  // 所有结点都没有左子结点
  //            1
  //             \ 
  //              2   
  //               \ 
  //                3 
  //                 \
  //                  4
  //                   \
  //                    5
  {
    args: {
      preorder: [1, 2, 3, 4, 5],
      inorder: [1, 2, 3, 4, 5],
    },
    expected: [5, 4, 3, 2, 1],
    type: 'no left child',
  },
  // 树中只有一个结点
  {
    args: {
      preorder: [1],
      inorder: [1],
    },
    expected: [1],
    type: 'only one node',
  },
  // 完全二叉树
  //              1
  //           /     \
  //          2       3  
  //         / \     / \
  //        4   5   6   7
  {
    args: {
      preorder: [1, 2, 4, 5, 3, 6, 7],
      inorder: [4, 2, 5, 1, 6, 3, 7],
    },
    expected: [4, 5, 2, 6, 7, 3, 1],
    type: 'complete binary tree',
  },
  // 输入空数组
  {
    args: {
      preorder: [],
      inorder: [],
    },
    expected: [],
    type: 'empty array',
  },
  // 输入的两个序列不匹配
  {
    args: {
      preorder: [1, 2, 4, 5, 3, 6, 7],
      inorder: [4, 2, 8, 1, 6, 3, 7],
    },
    expected: 'Invalid input',
    type: 'unmatched sequence',
  },
];

module.exports = data;
