class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }
  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new Queue();
console.log(myQueue.peek());
myQueue.enqueue("Joy"); // O(n)
myQueue.enqueue("Matt");
myQueue.enqueue("Dave");
console.log(myQueue.peek());
myQueue.dequeue(); // O(n)
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());
