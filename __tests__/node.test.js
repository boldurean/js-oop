import Node from '../src/Node.js';

describe('Binary tree', () => {
  test('getters', () => {
    const tree = new Node(9, new Node(4), new Node(17));

    expect(tree.getKey()).toBe(9);
    expect(tree.getLeft().getKey()).toBe(4);
    expect(tree.getRight().getKey()).toBe(17);
  });

  test('empty tree', () => {
    const tree = new Node();

    expect(tree.getKey()).toBeNull();
    expect(tree.getLeft()).toBeNull();
    expect(tree.getRight()).toBeNull();
  });

  test('search', () => {
    const expected1 = new Node(5);
    const expected2 = new Node(22, new Node(20), null);
    const tree = new Node(9,
      new Node(4,
        new Node(3),
        new Node(6,
          expected1,
          new Node(7))),
      new Node(17,
        null,
        expected2));

    expect(tree.search(5)).toBe(expected1);
    expect(tree.search(22)).toBe(expected2);
    expect(tree.search(35)).toBeNull();
    expect(tree.search(2)).toBeNull();
  });

  test('search algorithm', () => {
    const tree = new Node(9,
      new Node(4,
        new Node(6,
          new Node(5),
          new Node(7)),
        new Node(3)),
      new Node(17,
        null,
        new Node(22,
          null,
          new Node(20))));

    expect(tree.search(5)).toBeNull();
    expect(tree.search(7)).toBeNull();
    expect(tree.search(6)).toBeNull();
    expect(tree.search(4).getKey()).toBe(4);
    expect(tree.search(22).getKey()).toBe(22);
  });
});
