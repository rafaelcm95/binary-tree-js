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