import Node from './classes/node';
import { printNode } from './helpers';

let root = null;
let numbers = [10, 7, 15, 17, 8, 13, 21, 4, 19];

numbers.forEach(number => {
  !root ? root = new Node(number) : root.add(new Node(number));
});

console.log(printNode(root));