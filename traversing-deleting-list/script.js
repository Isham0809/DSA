class List {
    constructor(value) {
        this.head = {
            value: value,
            nextNode: null,
        };
        this.tail = this.head
        this.size = 1
    }
    appendNode(nextData) {
        let newNode = {
            value: nextData,
            nextNode: null,
        }
        this.tail.nextNode = newNode
        this.tail = newNode
        this.size += 1
    }
    traversingData() {
        let count = 1
        let currentNode = this.head
        while (count <= this.size) {
            console.log(currentNode);
            currentNode = currentNode.nextNode
            count++
        }
    }
    deletingData(index) {
        let counter = 1
        let leadNode = this.head

        if (index === 1) {
            this.head = this.head.nextNode
        } else {
            while (counter < index - 1) {
                leadNode = leadNode.nextNode
                counter++
            }
            let nextNode = leadNode.nextNode.nextNode
            leadNode.nextNode = nextNode

        }
    }
    inserting(index, value) {
        let counter = 1;
        let currentNode = this.head;

        while (counter < index-1) {
            counter++;
            currentNode = currentNode.nextNode;
        }
        let nextNode = currentNode.nextNode;

        currentNode.nextNode = {
            value: value,
            nextNode: nextNode,
        };
    }
}

let list = new List(1)
list.appendNode(2)
list.appendNode(3)
list.appendNode(4)
list.deletingData(3)
list.inserting(3, 3)
list.traversingData()
