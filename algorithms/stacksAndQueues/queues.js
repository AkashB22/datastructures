class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        const node = new Node(val);

        if(!this.first){
            this.first = node;
            this.last = this.first;
        } else{
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        
        const temp = this.first;

        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        temp.next = null;
        
        this.size--;
        return temp;
    }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);