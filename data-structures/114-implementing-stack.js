/**
 * @typedef {object} ListNode
 * @property {any} value
 * @property {ListNode | null} next
 */

class StackLinkedList {
  constructor() {
    /**
     * @type {ListNode}
     */
    this.top = null;
    /**
     * @type {ListNode}
     */
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = {
      value,
    };
    if (this.isEmpty()) {
      newNode.next = null;
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) throw new Error("Can not pop because stack is empty");
    if (this.length === 1) {
      this.bottom = null;
    }
    const oldTop = this.top;
    this.top = this.top.next;
    this.length--;
    return oldTop;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    const array = [];
    let i = this.length - 1;
    let currentNode = this.top;
    while (currentNode !== null) {
      array[i] = currentNode.value;
      currentNode = currentNode.next;
      i--;
    }
    return array;
  }
}

const myStack = new StackLinkedList();
myStack.push(1); // O(1)
myStack.push(2);
myStack.push(3);
console.log(myStack.toArray()); // O(n)
myStack.pop(); // O(1)
myStack.pop();
console.log(myStack.toArray());

class StackArray {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }
}
