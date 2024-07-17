const ds = require("./linkedList");

const DEFAULT_ARRAY_SIZE = 16;
const DEFAULT_LOAD_FACTOR = 0.75;

function HashMap() {
  this.buckets = new Array(DEFAULT_ARRAY_SIZE)
    .fill(null)
    .map(() => new ds.LinkedList());
  this.loadFactor = DEFAULT_ARRAY_SIZE;
}

HashMap.prototype = {
  hash: function (key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.buckets.length;
    }

    return hashCode;
  },

  /*
    set(key, value) function

    takes two arguments, the first is a key and
    the second is a value that is assigned to this
    key. If a key already exists, then the old
    value is prepended to the linked list
  */
  set: function (key, value) {
    key = this.hash(key);
    this.buckets[key].prepend(value);
  },

  /*
    get(key) function

     takes one argument as a key and returns the
     value that is assigned to this key. If a key
     is not found, return null.
  */
  get: function (key) {
    key = this.hash(key);
    return this.buckets[key];
  },

  /*
    has(key) function

     takes a key as an argument and returns true
     or false based on whether or not the key is
     in the hash map.
  */
  has: function (key) {
    return this.buckets[key].isEmpty();
  },

  /*
    remove(key) function

     takes a key as an argument. If the given
     key is in the hash map, it should remove
     the entry with that key and return true.
     If the key isn’t in the hash map, returns
     false.
  */
  remove: function (key) {
    key = this.hash(key);
    return this.buckets[key]
      ? (() => {
          this.buckets[key] = new ds.LinkedList();
        })()
      : false;
  },

  /*
    length() function

    returns the number of stored keys in the
    hash map.
  */
  length: function () {
    let counter = 0;
    this.buckets.forEach((item) => (item ? (counter += item.size()) : counter));
    return counter;
  },

  /*
    clear() function

    removes all entries in the hash map.
    sets everything to null.
  */
  clear: function () {
    this.buckets = new Array(DEFAULT_ARRAY_SIZE)
      .fill(null)
      .map(() => new ds.LinkedList());
  },

  /*
    keys() function

    returns an array containing all the keys
    inside the hash map.
  */
  keys: function () {
    let arr = [];

    this.buckets.forEach((item, index) =>
      !item.isEmpty() ? arr.push(index) : null
    );

    return arr;
  },

  /*
    values() function

    returns an array containing all values.
  */
  values: function () {
    let arr = [];
    this.buckets.forEach((item) =>
      !item.isEmpty() ? arr.push(...item.getAllValues()) : null
    );

    return arr;
  },

  entries: function () {
    let entriesArr = [];

    this.buckets.forEach((item, index) => {
      let entry = [index, item.getAllValues()];
      entriesArr.push(entry);
    });

    return entriesArr;
  },

  print: function () {
    this.buckets.forEach((item) => console.log(item));
  },
};

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.entries());
// test.print();
