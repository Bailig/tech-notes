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

  DFSearchInOrder() {
    return BinarySearchTree.traverseInOrder(this.root);
  }

  DFSearchPreOrder() {
    return BinarySearchTree.traversePreOrder(this.root);
  }

  DFSearchPostOrder() {
    return BinarySearchTree.traversePostOrder(this.root);
  }

  static traversePostOrder(node, list = []) {
    const { traversePostOrder } = BinarySearchTree;
    if (node.left !== null) traversePostOrder(node.left, list);
    if (node.right !== null) traversePostOrder(node.right, list);
    list.push(node.value);
    return list;
  }

  static traversePreOrder(node, list = []) {
    const { traversePreOrder } = BinarySearchTree;
    list.push(node.value);
    if (node.left !== null) traversePreOrder(node.left, list);
    if (node.right !== null) traversePreOrder(node.right, list);
    return list;
  }

  static traverseInOrder(node, list = []) {
    const { traverseInOrder } = BinarySearchTree;
    if (node.left !== null) traverseInOrder(node.left, list);
    list.push(node.value);
    if (node.right !== null) traverseInOrder(node.right, list);
    return list;
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
console.log(tree.DFSearchPostOrder());

//     9
//  4     20
//1  6  15  170
