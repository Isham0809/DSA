class Stack {
    constructor() {
        this.item = {}
        this.top = -1
    }

    push(element) {
        this.top++
        this.item[this.top] = element
    }

    pop() {
        if (this.top < 0) {
            return "Stack is underflow"
        }
        let popedItem = this.item[this.top] // top poped
        delete this.item[this.top];
        this.top--
        return popedItem
    }

    peek(){
        if (this.top < 0) {
            return "Stack is underflow"
        }
        return this.item[this.top]
    }

    isEmpty(){
        return this.top < 0
    }
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
console.log(stack.item)
console.log(stack.pop())
console.log(stack.item)
console.log(stack.peek())
console.log(stack.isEmpty())