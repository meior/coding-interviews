/**
 * 队列构造函数
 * 用两个栈实现队列操作
 */
function Queue() {
  this.stack1 = [];
  this.stack2 = [];

  /**
  * 向队列插入数据
  * @param  {*} node 入队的数据
  */
  this.push = function push(node) {
    this.stack1.push(node);
  };

  /**
  * 数据出队
  * @return {*} 出队的数据
  */
  this.pop = function pop() {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      throw new Error('Queue is empty');
    } else if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  };
}

module.exports = Queue;
