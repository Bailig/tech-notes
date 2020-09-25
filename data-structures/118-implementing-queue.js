/**
 * @typedef {object} ListNode
 * @property {any} value
 * @property {ListNode | null} next
 */

class Queue {
  constructor() {
    /**
     * @type {ListNode}
     */
    this.first = null;
    /**
     * @type {ListNode}
     */
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = { value, next: null };
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (this.isEmpty())
      throw new Error("Cannot dequeue because the queue is empty");
    if (this.length === 1) {
      this.last = null;
    }
    const oldFirst = this.first;
    this.first = this.first.next;
    this.length--;
    return oldFirst;
  }
  isEmpty() {
    return this.length === 0;
  }
  toArray() {
    const array = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1); // O(1)
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.toArray()); // O(n)
myQueue.dequeue(); // O(1)
myQueue.dequeue();
console.log(myQueue.toArray());
