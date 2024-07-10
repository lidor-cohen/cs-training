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

  add(element, addAtStart = false) {
    const node = new lNode(element);
    if (this.head == null) {
      this.head = node;
    } else if (addAtStart) {
      node.nextNode = this.head;
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }

  insert(element, index) {
    let current = this.head;

    for (let i = 1; i < index; i++) {
      current = current.nextNode;
    }

    const node = new lNode(element);

    const temp = current.nextNode;
    current.nextNode = node;
    current.nextNode.nextNode = temp;
  }

  count() {
    let current = this.head;
    let counter = 0;

    if (!current) return 0;

    while (current) {
      counter++;
      current = current.nextNode;
    }

    return counter;
  }

  print(reverse = false) {
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

let l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
l.add(6);
l.add(7);
l.insert(50, 4);
l.print(true);

console.log(l.count());
