/**
 * @typedef {object} LinkedListItem
 * @property {any} value
 * @property {LinkedListItem | null} next
 */

class LinkedList {
  constructor(value) {
    /**
     * @type {LinkedListItem}
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

  unshift(value) {
    const newHead = {
      value,
      next: this.head,
    };
    this.head = newHead;
    this.length++;
  }

  findIndex(value) {
    let i = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) return i;
      i++;
      currentNode = currentNode.next;
    }
  }

  get(index) {
    this._checkIndexRange(index);
    let i = 0;
    let currentNode = this.head;

    while (i < index) {
      i++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return;
    }
    this._checkIndexRange(index - 1);
    const newNode = { value };
    const preNode = this.get(index - 1);
    newNode.next = preNode.next;
    preNode.next = newNode;
    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.length++;
  }

  remove(index) {
    this._checkIndexRange(index);
    const preNode = this.get(index - 1);
    preNode.next = preNode.next.next;
    if (preNode.next === null) {
      this.tail = preNode;
    }
    if (index === 0) {
      this.head = preNode;
    }
    this.length--;
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

  _checkIndexRange = (index) => {
    if (index > this.length - 1) throw new Error("Index out of range");
  };
}

let myLinkedList = new LinkedList(0);

myLinkedList.push(1); // O(1)
myLinkedList.push(2); // O(1)
myLinkedList.reverse(); // O(n)
console.log(myLinkedList.length);
console.log(myLinkedList.head);
console.log(myLinkedList.tail);
console.log(myLinkedList.toArray()); // O(n)
