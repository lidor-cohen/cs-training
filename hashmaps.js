const ds = require("./linkedList");

const DEFAULT_ARRAY_SIZE = 16;
const DEFAULT_LOAD_FACTOR = 0.75;

function HashMap() {
  this.buckets = new Array(DEFAULT_ARRAY_SIZE).fill(null);
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
    value is overwritten
  */
  set: function (key, value) {
    key = this.hash(key);
    this.buckets[key] = value;
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
    return this.buckets.includes(this.hash(key));
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
          this.buckets[key] = null;
        })()
      : false;
  },

  /*
    length() function

    returns the number of stored keys in the
    hash map.
  */
  length: function () {
    return this.buckets.reduce((acc, item) => (item ? acc + 1 : acc), 0);
  },

  /*
    clear() function

    removes all entries in the hash map.
    sets everything to null.
  */
  clear: function () {
    this.buckets.fill(null);
  },

  /*
    keys() function

    returns an array containing all the keys
    inside the hash map.
  */
  keys: function () {},

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

console.log(test.length());

// test.print();
