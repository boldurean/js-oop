export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  reduce(fn, initialValue) {
    let acc = fn(initialValue, this.key);

    if (this.left !== null) {
      acc = this.left.reduce(fn, acc);
    }
    if (this.right !== null) {
      acc = this.right.reduce(fn, acc);
    }
    return acc;
  }

  getCount() {
    return this.reduce((acc) => acc + 1, 0);
  }

  isBalanced() {
    const limit = 2;
    const left = this.left === null ? 0 : this.left.getCount();
    const right = this.right === null ? 0 : this.right.getCount();
    if (this.left === null && this.right === null) return true;

    const diff = Math.min(left, right) - Math.max(left, right);
    if (limit < Math.abs(diff)) {
      return false;
    }
    if (this.left !== null) {
      return this.left.isBalanced();
    }
    if (this.right !== null) {
      return this.right.isBalanced();
    }
    return true;
  }
}
