export default class Node {
  constructor({
    key,
    parent = null,
    leftChild = null,
    rightChild = null,
    level = 0
  }) {
    this.key = key;
    this.parent = parent;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
    this.level = level;
  }

  get _hasRightChild() { return this.rightChild !== null }

  get _hasLeftChild() { return this.leftChild !== null }

  get hasBothChildren() { return this._hasLeftChild && this._hasRightChild }

  get isLeaf() { return !this._hasLeftChild && !this._hasRightChild }

  get max() { return !this._hasRightChild ? this : this.rightChild.max; }

  get min() { return !this._hasLeftChild ? this : this.leftChild.min; }

  add(node) {
    const isMajorThan = this.key > node.key;

    const addLeft = () => {
      node.parent = this;
      this.leftChild = node;
    }
  
    const addRight = () => {
      node.parent = this;
      this.rightChild = node;
    }

    if (isMajorThan) {
      return !this._hasLeftChild ? addLeft() : this.leftChild.add(node);
    } 
    
    return !this._hasRightChild ? addRight() : this.rightChild.add(node);
  }

  find(key) {
    const isMinorThan = this.key < key;
    const isEqualThan = this.key === key;

    if (isEqualThan) return this;

    if (isMinorThan) {
      return !this._hasLeftChild ? this.leftChild.find(key) : null
    }
    
    return !this._hasRightChild ? this.rightChild.find(key) : null
  }
}