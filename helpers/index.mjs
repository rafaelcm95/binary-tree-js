import Node from '../classes/node';

export const printNode = (node) => {
  if (node._hasLeftChild) printNode(node.leftChild);
  console.log(node.key);
  if (node._hasRightChild) printNode(node.rightChild);
}

export const breadthFirst = (node) => {
  let queue = [];
  queue.push(node);

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current.key);

    if (current._hasLeftChild) {
      queue.push(current.leftChild);
    }

    if (current._hasRightChild) {
      queue.push(current.rightChild);
    }
  }
}

export const log = {
  log: (content) => console.log(`LOG: %O \n`, content),
  result: (content) => console.log(`RESULT: %O \n`, content),
  warn: (content) => console.log(`---- WARNING: %O ----\n`, content),
  error: (content) => console.log(`---- ERROR: $%O ----- \n`, content)
}

export const fake = (nodes) => {
  let root = null;
  nodes.forEach(node => {
    root ? root.add(new Node(node)) : root = new Node(node) ;
  });

  return root;
};