'use strict';

class LinkedList {

  constructor() {

    this._first = null;
  }

  length() {
    let length = 0;
    let current = this._first;

    while(current) {
      current = current.nextElement;
      length++;
    }

    return length;
  }

  push(value) {
    let lastEl = this.last();
    
    let newElement = {
      value : value,
      nextElement : null
    }  

    if (lastEl) {
      lastEl.nextElement = newElement;
      return;
    } 

    this._first = newElement;
  }

  pop() {}
  shift() {}
  unshift() {}

  first() {
    return this._first ? this._first.value : null;
  }

  last() {
    let last = this._first;

    while(last && last.nextElement) {
      last = last.nextElement;
    }
    
    return last;
  }

  remove() {}
  toArray() {}
}


module.exports = LinkedList;