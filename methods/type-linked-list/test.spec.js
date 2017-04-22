'use strict';

const LinkedList = require('./index');
const should = require('should');

describe('#linked-list', function(){

  it('should create new linkedList with default methods', function(){
    let ll = new LinkedList();

    ll.should.be.instanceOf(LinkedList);

    ll.push.should.be.instanceOf(Function);
    ll.pop.should.be.instanceOf(Function);
    ll.shift.should.be.instanceOf(Function);
    ll.unshift.should.be.instanceOf(Function);
    ll.first.should.be.instanceOf(Function);
    ll.last.should.be.instanceOf(Function);
    ll.remove.should.be.instanceOf(Function);
    ll.length.should.be.instanceOf(Function);
    ll.toArray.should.be.instanceOf(Function);
  });

  it('should #length return 0 if there are no elements', function(){
    let ll = new LinkedList();
    ll.length().should.be.eql(0);
  });

  it('should #first return null in empty linkedList', function(){
    let ll = new LinkedList();
    let first = ll.first();

    should.equal(first, null);
  });

  it('should #push add value to the end of linkedList', function(){
    let ll = new LinkedList();
    ll.push(10);
    ll.push(22);
    ll.push(30);

    ll._first.should.be.instanceOf(Object);
    ll.length().should.be.eql(3);
  });

  it('should #first return first element in linkedList', function(){
    let ll = new LinkedList();
    ll.push(11);
    ll.push(20);
    ll.first().should.be.eql(11);
  });

  

});