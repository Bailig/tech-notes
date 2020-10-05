/**
 * @typedef {object} TreeNodeData
 * @property {any} value
 * @property {TreeNodeData | null} left
 * @property {TreeNodeData | null} right
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    /**
     * @type {TreeNodeData | null}
     */
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value)
        throw new Error("Value already exist in the tree");
      if (currentNode.value > value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) return;
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) return currentNode;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  BFSearch() {
    const list = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    return list;
  }

  BFSearchRecursive(queue = [this.root], list = []) {
    if (queue.length === 0) return list;
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
    return this.BFSearchRecursive(queue, list);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.BFSearch());
console.log(tree.BFSearchRecursive());

//     9
//  4     20
//1  6  15  170
