import Node from '../src/NodeData.js';

describe('Binary tree', () => {
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

  test('methods', () => {
    expect(tree.getCount()).toBe(9);
    expect(tree.getSum()).toBe(96);
    expect(tree.toArray()).toEqual([9, 4, 8, 6, 3, 7, 17, 22, 20]);
    expect(tree.toString()).toEqual('(9, 4, 8, 6, 3, 7, 17, 22, 20)');
  });

  test('predicate methods', () => {
    expect(tree.some((key) => key < 4)).toBeTruthy();
    expect(tree.some((key) => key > 22)).toBeFalsy();
    expect(tree.every((key) => key <= 22)).toBeTruthy();
    expect(tree.every((key) => key < 22)).toBeFalsy();
    expect(tree.every(Number.isInteger)).toBeTruthy();
  });
});
