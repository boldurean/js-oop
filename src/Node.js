export default class Node {
  constructor(key = null, leftNode = null, rigthNode = null) {
    this.key = key;
    this.leftNode = leftNode;
    this.rightNode = rigthNode;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.leftNode;
  }

  getRight() {
    return this.rightNode;
  }

  search(searchKey) {
    if (searchKey === this.key) return this;
    if (searchKey < this.key && this.leftNode !== null) return this.leftNode.search(searchKey);
    if (searchKey > this.key && this.rightNode !== null) return this.rightNode.search(searchKey);
    return null;
  }
}
