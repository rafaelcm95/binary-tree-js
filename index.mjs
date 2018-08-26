import Node from './classes/node';
import { printNode, log, fake } from './helpers';
import fakeNodes from './payloads/fake-nodes';

const root = fake(fakeNodes);

log.log('Min Node:');
log.result(root.min);

log.log('Max Node:');
log.result(root.max);

log.log('Print Node in order:');
printNode(root);
