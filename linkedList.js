class lNode {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.head = headNode;
  }

  // Add node to the end of the list
  append(value) {
    let node = new lNode(value);

    !this.head
      ? (this.head = node)
      : (() => {
          let current = this.head;

          while (current.nextNode) {
            current = current.nextNode;
          }

          current.nextNode = node;
        })();
  }

  // Add node to the start of the list
  prepend(value) {
    let node = new lNode(value);

    this.head == null
      ? (this.head = node)
      : (() => {
          let temp = this.head;
          this.head = node;
          node.nextNode = temp;
        })();
  }

  // Returns the size of the linked list
  size() {
    let current = this.head;
    let counter = 0;

    !current
      ? (counter = 0)
      : (() => {
          while (current) {
            counter++;
            current = current.nextNode;
          }
        })();

    return counter;
  }

  // Return the head of the Linked List
  getHead() {
    return this.head;
  }

  // Return the tail of the linked list
  getTail() {
    return !this.head.nextNode
      ? this.head
      : (() => {
          let current = this.head;
          while (current.nextNode) {
            current = current.nextNode;
          }

          return current;
        })();
  }

  // Get node at index
  at(index) {
    if (index > this.count()) {
      throw console.error("Index out of bounds");
    }

    let current = this.head;
    while (--index) {
      current = current.nextNode;
    }

    return current.data;
  }

  // Remove last element from the linked list
  pop() {
    let current = this.head;

    !current
      ? null
      : !current.nextNode
      ? (this.head = null)
      : (() => {
          while (current.nextNode.nextNode) {
            current = current.nextNode;
          }
          current.nextNode = null;
        })();
  }

  // Return boolean to wether a value is in the linked list
  contains(value) {
    return !this.head
      ? false
      : (() => {
          let current = this.head;
          while (current) {
            if (current.data === value) return true;
            current = current.nextNode;
          }
          return false;
        })();
  }

  // Finds index of value
  find(value) {
    return !this.head
      ? -1
      : (() => {
          let current = this.head;
          let index = 0;
          while (current) {
            if (current.data === value) return index;
            current = current.nextNode;
            index++;
          }
          return -1;
        })();
  }

  // Insert a new value at specific index
  insertAt(value, index) {
    let current = this.head;

    if (index > this.size() || index < 0) return false;
    else if (index === 0) {
      this.prepend(value);
      return true;
    } else {
      while (--index) {
        console.log(`
                  index: ${index}
                  data: ${current.data}
                  `);
        current = current.nextNode;
      }
      const temp = current.nextNode;
      current.nextNode = new lNode(value);
      current.nextNode.nextNode = temp;
    }
  }

  // Remove Node at certain index
  removeAt(index) {
    let current = this.head;

    if (index >= this.size() || index < 0) return false;
    else if (index === 0) {
      this.head = this.head.nextNode;
      return true;
    } else {
      while (--index) {
        console.log(`
                  index: ${index}
                  data: ${current.data}
                  `);
        current = current.nextNode;
      }

      console.log("index: " + index);

      current.nextNode = current.nextNode.nextNode;
    }
  }

  // Custom callback to do anything to linked list data
  do(callback) {
    let current = this.head;

    while (current) {
      callback(current.data);
      current = current.nextNode;
    }
  }

  // Pretty Print the linked list
  toString(reverse = false) {
    let current = this.head;
    let arr = [];

    if (reverse) {
      while (current) {
        arr.unshift(`[${current.data}]`);
        current = current.nextNode;
      }
    } else {
      while (current) {
        arr.push(`[${current.data}]`);
        current = current.nextNode;
      }
    }

    console.log(arr.join("->"));
  }
}

module.exports = { LinkedList };
