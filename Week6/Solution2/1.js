class MyCircularQueue {
  /** @param {number} k */
  constructor(k) {
      this.size = k;
      this.values = [];
      this.end = -1;
  }

  /** @return {boolean}*/
  enQueue(value) {
      if (this.end + 1 === this.size) {
          return false;
      }
      this.values.push(value);
      ++this.end;
      return true;
  }

  /** @return {boolean}*/
  deQueue() {
      if(this.end === -1) {
          return false;
      }
      this.values.shift();
      --this.end;
      return true;
  }

  /** @return {number}*/
  Front() {
      return this.end === -1 ? -1 : this.values[0];
  }

  /** @return {number}*/
  Rear() {
      return this.end === -1 ? -1 : this.values[this.end];
  }

  /** @return {boolean}*/
  isEmpty() {
      return this.end === -1;
  }

  /** @return {boolean}*/
  isFull() {
      return this.end + 1 === this.size;
  }
}

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/