class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        };
        this.tail = this.head
        this.size = 1
    }
    appendNode(nextData) {
        let newNode = {
            value: nextData,
            next: null,
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size += 1
    }
    traversingData() {
        let count = 0
        let currentNode = this.head
        while (count < this.size) {
            console.log(currentNode)
            currentNode = currentNode.next
            count++
        }
    }
    deletingData(index) {
        let counter = 1
        let leadNode = this.head

        if (index === 1) {
            this.head = this.head.next
        } else {
            while (counter < index - 1) {
                leadNode = leadNode.next
                counter++
            }
            let nextNode = leadNode.next.next
            leadNode.next = nextNode
            console.log(counter)
        }
    }
}

let list = new List(1)
list.appendNode(2)
list.appendNode(3)
list.appendNode(4)
list.traversingData()
list.deletingData(2)
