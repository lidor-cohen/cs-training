const scripts = require("./script.js");

class BinaryNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinaryTree {
  constructor(arr) {
    this.root = null;
    this.buildTree(arr);
  }

  buildTree(originalArr) {
    let arr = scripts.merge_sort([...new Set(originalArr)]);
    const midpoint = Math.floor((arr.length - 1) / 2);
    this.root = new BinaryNode(arr[midpoint]);
    arr.forEach((item) => {
      this.recursiveInsert(item);
    });
    return this.root;
  }

  recursiveInsert(value) {
    const helper = (current, value) => {
      if (current === null) {
        return new BinaryNode(value);
      }

      if (value < current.value) {
        current.leftNode = helper(current.leftNode, value);
      } else if (value > current.value) {
        current.rightNode = helper(current.rightNode, value);
      }
      return current;
    };

    this.root = helper(this.root, value);
  }

  insert(value) {
    let stack = [this.root];

    while (stack.length > 0) {
      const current = stack.pop();

      if (current.value === value) {
        return;
      } else if (current.value > value) {
        if (current.leftNode == null) {
          current.leftNode = new BinaryNode(value);
          return;
        } else {
          stack.push(current.leftNode);
        }
      } else if (current.value < value) {
        if (current.rightNode == null) {
          current.rightNode = new BinaryNode(value);
          return;
        } else {
          stack.push(current.rightNode);
        }
      }
    }
  }

  delete(value) {
    const helper = (root, value) => {
      if (root === null) return root;

      if (root.value > value) {
        root.leftNode = helper(root.leftNode, value);
      } else if (root.value < value) {
        root.rightNode = helper(root.rightNode, value);
      } else {
        if (root.leftNode == null) {
          return root.rightNode;
        } else if (root.rightNode == null) {
          return root.leftNode;
        }

        let current = root.rightNode;
        while (current.left) {
          current = current.left;
        }
        root.value = current.value;
        root.rightNode = helper(root.rightNode, root.value);
      }
      return root;
    };

    helper(this.root, value);
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
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

let l = new BinaryTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
l.insert(2);
l.insert(6);

l.delete(3);
l.delete(4);

l.prettyPrint();
