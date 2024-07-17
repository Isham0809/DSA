class List{
    constructor(data){
        this.head={
            value:data,
            next:null,
        };
        this.tail=this.head
    }
    appendNode(nextData){
        let newNode = {
            value:nextData,
            next:null,
        }
        this.tail.next=newNode
        this.tail=newNode
    }
}

let list = new List(1) 
list.appendNode(2)
list.appendNode(3)
list.appendNode(4)

console.log(list)