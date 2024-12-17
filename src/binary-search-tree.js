const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.node = null;
  }

  root() {
    if (this.node) return this.node;
    return null;
  }

  add(data) {
    this.node = addWithin(this.node, data);

    function addWithin(node, data) {

      if(!node) return new Node(data);
      if(node.data === data) return node;
      if(data < node.data) node.left = addWithin(node.left, data);
      if(data > node.data) node.right = addWithin(node.right, data);
      return node;

    }
  }

  has(data) {
    return (this.search(this.node, data) != null);
  }

  find(data) {
    return (this.search(this.node, data));
  }

  search(node, data) {

    if (node === null) return null;
    if (data < node.data) return this.search(node.left, data);
    if (data > node.data) return this.search(node.right, data);
    return node;

  }

  remove(data) {
    this.node = removeNode(this.node, data);

    function removeNode(node, data){
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.node) return null;
    let node = this.node;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.node) return null;
    let node = this.node;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};