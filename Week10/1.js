class BSTIterator {
  /** @param {TreeNode} root */
  constructor(root) {
      this.stack = [];
      this._inputNode(root);
  }
  
  _inputNode(node) {
    while(node){
      this.stack.push(node);
      node = node.left;
    }
  }

  /** @return {number} */
  next() {
      if(this.hasNext()) {
          const node = this.stack.pop();
          this._inputNode(node.right);
          return node.val;
      }
  }

  /** @return {boolean} */
  hasNext() {
      return this.stack.length;
  }
}