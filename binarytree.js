class BinaryNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  buildTree(arr) {
    // Remove Duplicates
    const copyArr = [...new Set(arr)];
    copyArr.forEach((item) => {
      this.insert(item);
    });
  }

  insert(value) {
    let node = this.root;
    if (node == null) {
      this.root = new BinaryNode(value);
      return;
    } else {
      const searchTree = (node) => {
        if (node.value === value) {
          return;
        } else if (node.value > value) {
          if (node.leftNode == null) {
            node.leftNode = new BinaryNode(value);
            return;
          } else {
            searchTree(node.leftNode);
          }
        } else {
          if (node.rightNode == null) {
            node.rightNode = new BinaryNode(value);
            return;
          } else {
            searchTree(node.rightNode);
          }
        }
      };

      return searchTree(node);
    }
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.rightNode !== null) {
      this.prettyPrint(
        node.rightNode,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftNode !== null) {
      this.prettyPrint(
        node.leftNode,
        `${prefix}${isLeft ? "    " : "│   "}`,
        true
      );
    }
  }
}

let l = new BinaryTree();
l.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
l.prettyPrint(l.root, ">");
