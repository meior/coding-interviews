/**
 * 链表节点构造函数
 *
 * @param {Number} x 节点值
 */
function ListNode(x) {
  this.val = x;
  this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const data = [
  // 正常表现的链表
  {
    args: node1,
    expected: [5, 4, 3, 2, 1],
    type: 'normal',
  },
  // 只有一个节点的链表
  {
    args: node5,
    expected: [5],
    type: 'only one node',
  },
  // 空链表
  {
    args: {},
    expected: [],
    type: 'empty list',
  },
];

module.exports = data;
