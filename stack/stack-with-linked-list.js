class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(element) {
    let newNode = new Node(element);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }
  pop() {
    if (!this.top) {
      return undefined;
    }
    let poppedElement = this.top.data;
    this.top = this.top.next;
    return poppedElement;
  }

  peek() {
    if (!this.top) {
      return undefined;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());