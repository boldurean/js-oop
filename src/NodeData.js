export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  toArray() {
    const keysArray = [];
    if (this.key !== null) {
      keysArray.push(this.key);
    }
    if (this.left !== null) {
      keysArray.push(this.left.toArray());
    }
    if (this.right !== null) {
      keysArray.push(this.right.toArray());
    }
    return keysArray.flat();
  }

  getCount() {
    return this.toArray().length;
  }

  getSum() {
    return this.toArray().reduce((acc, num) => acc + num);
  }

  toString() {
    return `(${this.toArray().join(', ')})`;
  }

  every(fn) {
    return this.toArray().every(fn);
  }

  some(fn) {
    return this.toArray().some(fn);
  }
}

const tree = new Node(9,
  new Node(4,
    new Node(8),
    new Node(6,
      new Node(3),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      null,
      new Node(20))));

console.log(tree.getCount()); // 9
console.log(tree.toArray());
console.log(tree.getSum()); // 96
console.log(tree.toArray()); // [9, 4, 8, 6, 3, 7, 17, 22, 20]
console.log(tree.toString()); // '(9, 4, 8, 6, 3, 7, 17, 22, 20)'
