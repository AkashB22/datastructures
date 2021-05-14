class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return null;
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    insert(index, val){
        if(index<0 || index>this.length) return false;
        if(index===this.length) return !!this.push(val);
        if(index===0) return !!this.unshift(val);
        const newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        newNode.next = temp;
        prev.next = newNode;
        this.length++;
        return true;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = thie.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    rotate(index){
        if(index > this.length || index < 0) index = index % this.length; 
        if(index < 0) index = this.length -1;
        if(index === 0) return;

        let current = this.head;
        this.tail.next = this.head;
        let counter = 0;
        
        while(counter !== index -1 ){
            current = current.next;
            counter++;
        }
        this.head = current.next;
        current.next = null;
        this.tail = current;
        return;
    }

    reverse(){
        if(!this.head) return false;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null,
            next;

        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        console.log(prev);
        return;
    }

    /*set(index, val){
        if(index > this.length || index < 0) return false;
        let i = 0, current = this.head;
        while(index !== i){
            current = current.next;
            i++;
        }
        current.val = val;
        return true;
    }*/
    set(index, val){
        let current = this.get(index);
        if(current){
            current.val = val;
            return true;
        }
        return false;
    }
}

const sll = new SinglyLinkedList();

sll.push(10).push(20).push(30);
// console.log(sll.pop());
// console.log(sll.get(0).val);
// console.log(sll.get(1).val);
// console.log(sll.get(2).val);
// console.log(sll.get(3));
// console.log(sll.insert(3, 25));
// console.log(sll.insert(100, 25));
// console.log(sll.get(2).val);
sll.rotate(1);
// sll.reverse();
// console.log(sll.set(1, 10));
// console.log(sll.set(2, 20));
// console.log(sll.set(10, 10));
console.log(JSON.stringify(sll));
