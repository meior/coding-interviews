/**
 * 判断对象是否为空对象
 * 遍历其属性，有自有属性则不为空
 * @param   {Object}  obj 要判断的对象
 * @returns {Boolean}     判断结果
 */
function isEmptyObject(obj) {
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return true;
    }
  }
  return false;
}

/**
 * 从尾到头打印链表每个节点的值
 * @param  {ListNode} head 链表头节点
 * @return {Array}         链表所有节点值
 */
function printListFromTailToHead(head) {
  // 空链表返回空数组
  if (isEmptyObject(head)) {
    return [];
  }

  let headNode = head;
  const result = [];

  // 将链表头部元素反向插入数组
  while (headNode) {
    result.unshift(headNode.val);
    headNode = headNode.next;
  }
  return result;
}

module.exports = printListFromTailToHead;
