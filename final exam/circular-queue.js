// Circular Queue 
class circularQueue {
    constructor(value) {
      this.value = value;
      this.item = new Array(value);
      this.front = -1;
      this.rear = -1;
    }
    enqueue(element) {
      if ((this.rear + 1) % this.value === this.front) {
        return "full";
      }
      if (this.front === -1) {
        this.front = 0;
      }
  
      this.rear = (this.rear + 1) % this.value;
      this.item[this.rear] = element;
    }
  
    dequeue() {
      if (this.front === -1) {
        return "empty";
      }
  
      let item = this.item[this.front]; 
  
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.value;
      }
      return item;
    }
  
    frontItem() {
      if (this.front === -1) {
        return "empty";
      }
      return this.item[this.front];
    }
  
    isEmpty() {
      return this.front === -1;
    }
  
    isFull() {
      return (this.rear + 1) % this.value === this.front;
    }
  }
  
  let cQ = new circularQueue(3)
  cQ.enqueue(1)
  cQ.enqueue(2)
  cQ.enqueue(3)
  console.log(cQ.item)
  console.log(cQ.isFull())
  console.log(cQ.item)
  console.log(cQ.frontItem()) 
  console.log(cQ.dequeue())
  console.log(cQ.frontItem()) 
  console.log(cQ.rear)
  console.log(cQ.isEmpty()) 
  