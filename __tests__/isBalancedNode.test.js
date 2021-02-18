import Node from '../src/isBalancedNode.js';

describe('Binary tree is balaced', () => {
  test('#1', () => {
    const tree = new Node(4,
      new Node(3,
        new Node(2)));

    expect(tree.isBalanced()).toBeTruthy();
  });

  test('#2', () => {
    const tree = new Node(4,
      new Node(3,
        new Node(2,
          new Node(1))));

    expect(tree.isBalanced()).toBeFalsy();
  });

  test('#3', () => {
    const tree = new Node(4,
      new Node(3,
        new Node(2,
          new Node(1))),
      new Node(5));

    expect(tree.isBalanced()).toBeTruthy();
  });

  test('#4', () => {
    const tree = new Node(9,
      new Node(4,
        new Node(3),
        new Node(6,
          new Node(5),
          new Node(7))),
      new Node(17,
        null,
        new Node(22,
          null,
          new Node(20))));

    expect(tree.isBalanced()).toBeTruthy();
  });

  test('#5', () => {
    const tree = new Node(8,
      new Node(5,
        null,
        new Node(6,
          new Node(4))),
      new Node(12,
        new Node(10,
          null,
          new Node(11)),
        new Node(14)));

    expect(tree.isBalanced()).toBeTruthy();
  });

  test('#6', () => {
    const tree = new Node(8,
      new Node(5,
        new Node(4,
          new Node(1),
          new Node(3,
            new Node(2))),
        new Node(6)),
      new Node(12,
        new Node(10,
          null,
          new Node(11)),
        new Node(14)));

    expect(tree.isBalanced()).toBeFalsy();
  });

  test('#7', () => {
    const tree = new Node(12,
      new Node(5,
        new Node(1,
          null,
          new Node(2,
            null,
            new Node(3,
              null,
              new Node(4)))),
        new Node(10,
          new Node(8,
            new Node(7,
              new Node(6)),
            new Node(9)),
          new Node(11))),
      new Node(15,
        new Node(14,
          new Node(13))));

    expect(tree.isBalanced()).toBeFalsy();
  });
});
