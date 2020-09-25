// add reverse to linked list

/**
 * @typedef {object} ListNode
 * @property {any} value
 * @property {ListNode | null} next
 */

class LinkedList {
  constructor(value) {
    /**
     * @type {ListNode}
     */
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newTail = { value, next: null };
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
  }

  reverse() {
    if (this.length === 1) return;

    let preNode = this.head;
    let currentNode = this.head.next;
    this.tail = this.head;
    this.tail.next = null;
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = preNode;
      preNode = currentNode;
      currentNode = nextNode;
    }
    this.head = preNode;
  }

  toArray() {
    const array = [];

    let node = this.head;
    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
}

let myLinkedList = new LinkedList(0);

myLinkedList.push(1); // O(1)
myLinkedList.push(2); // O(1)
myLinkedList.reverse(); // O(n)
console.log(myLinkedList.length);
console.log(myLinkedList.head);
console.log(myLinkedList.tail);
console.log(myLinkedList.toArray()); // O(n)
