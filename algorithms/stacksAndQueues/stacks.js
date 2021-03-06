class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        const node = new Node(val);

        if(!this.first){
            this.first = node;
            this.last = this.first;
        } else{
            let temp = this.first 
            this.first = node;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop(){
        if(!this.first) return null;

        const temp = this.first;
        
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        } else{
            this.first = temp.next;
            temp.next = null;
        }
        this.size--;
        return temp.val;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);
