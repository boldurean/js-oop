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
