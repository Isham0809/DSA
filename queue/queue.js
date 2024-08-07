class Queue{
    constructor() {
        this.item = []
    }

    enqueue(element){
        this.item.push(element)
        return this.item
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is Empty"
        } else{
            this.item.shift()
            return this.item
        }
    }

    front(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }else{
            return this.item[0]
        }
    }

    isEmpty(){
        return this.item.length === 0
    }
}

let obj = new Queue();
console.log(obj.isEmpty()); // true
console.log(obj.item); // []
console.log(obj.enqueue(1)); // [1]
console.log(obj.enqueue(2)); // [1,2]
console.log(obj.enqueue(3)); // [1,2,3]
console.log(obj.enqueue(4)); // [1,2,3,4]
console.log(obj.enqueue(5)); // [1,2,3,4,5]
console.log(obj.enqueue(6)); // [1,2,3,4,5,6]
console.log(obj.isEmpty()); // false
console.log(obj.item); // [1,2,3,4,5,6]
console.log(obj.dequeue()); // [2,3,4,5,6]
console.log(obj.dequeue()); // [3,4,5,6]
console.log(obj.dequeue()); // [4,5,6]
console.log(obj.dequeue()); // [5,6]
console.log(obj.dequeue()); // [6]
console.log(obj.dequeue()); // [] //
console.log(obj.isEmpty()); // true
console.log(obj.item); // []
console.log(obj.front());