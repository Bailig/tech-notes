/**
 * @typedef {object} TreeNodeData
 * @property {any} value
 * @property {TreeNodeData | null} left
 * @property {TreeNodeData | null} right
 *
 *
 * @typedef {object} TreeNodeGroup
 * @property {TreeNodeData} parentNode
 * @property {string} key
 * @property {TreeNodeData} currentNode
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

  remove(value) {
    const { isLeaf, findClosestNodesParent, findParent } = BinarySearchTree;
    if (!this.root) return;
    if (isLeaf(this.root)) {
      this.root = null;
      return;
    }
    const nodeToRemove = findParent(this.root, value);
    if (!nodeToRemove) throw Error("Node not found");

    let key;
    if (
      nodeToRemove.currentNode.value - nodeToRemove.currentNode.left.value <
      nodeToRemove.currentNode.right.value - nodeToRemove.currentNode.value
    ) {
      key = "left";
    } else {
      key = "right";
    }
    const nodeToReplace = findClosestNodesParent(
      {
        parentNode: nodeToRemove.currentNode,
        key,
        currentNode: nodeToRemove.currentNode[key],
      },
      value
    );

    nodeToReplace.parentNode[nodeToReplace.key] = null;
    if (nodeToRemove.currentNode === this.root) {
      nodeToReplace.currentNode.left = this.root.left;
      nodeToReplace.currentNode.right = this.root.right;
      this.root = nodeToReplace.currentNode;
    } else {
      nodeToReplace.currentNode.left =
        nodeToRemove.parentNode[nodeToRemove.key].left;
      nodeToReplace.currentNode.right =
        nodeToRemove.parentNode[nodeToRemove.key].right;
      nodeToRemove.parentNode[nodeToRemove.key] = nodeToReplace.currentNode;
    }
  }

  toObject() {
    return BinarySearchTree.traverse(this.root);
  }

  /**
   * @param {TreeNodeData} node
   * @param {any} value
   * @returns {Partial<TreeNodeGroup> | undefined}
   */
  static findParent(node, value) {
    let parentNode = null;
    let key = null;
    let currentNode = node;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return {
          parentNode,
          currentNode,
          key,
        };
      }
      if (value < currentNode.value) {
        parentNode = currentNode;
        key = "left";
        currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        parentNode = currentNode;
        key = "right";
        currentNode = currentNode.right;
      }
    }
  }

  /**
   * @param {TreeNodeGroup} nodeGroup
   * @param {any} value
   * @returns {TreeNodeGroup}
   */
  static findClosestNodesParent(nodeGroup, value) {
    let parentNode = nodeGroup.parentNode;
    let key = nodeGroup.key;
    let currentNode = nodeGroup.currentNode;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          return {
            parentNode,
            currentNode,
            key,
          };
        }
        parentNode = currentNode;
        key = "left";
        currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        if (currentNode.right === null) {
          return {
            parentNode,
            currentNode,
            key,
          };
        }
        parentNode = currentNode;
        key = "right";
        currentNode = currentNode.right;
      }
    }
  }

  static isLeaf(node) {
    return node.left === null && node.right === null;
  }

  static traverse(node) {
    const { traverse } = BinarySearchTree;
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
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
console.log(JSON.stringify(tree.toObject(), null, 2));
console.log(JSON.stringify(tree.lookup(20), null, 2));
tree.remove(9);
console.log(JSON.stringify(tree.toObject(), null, 2));

//     9
//  4     20
//1  6  15  170
