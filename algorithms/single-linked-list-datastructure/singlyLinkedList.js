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

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node; //node = {val: "val", next: null}
            this.tail = this.head;
        } else{
            this.tail.next = node// node = {val: "val", next: null}
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        
        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        let newNode = new Node(val);
        
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while(counter !== index){
            current = current.next;
            counter++
        }

        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true
        }
        
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index-1);
        let temp = prev.next;
        
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        
        previousNode.next = removed.next; 
        this.length--;
        
        return removed;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let previous = null;
        
        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        console.log("node", node);

        return this;
    }
}
const list = new SinglyLinkedList();

(list.push(13));
(list.push(27));
(list.push(32));
(list.push(71));
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift('Good morning'));
// console.log(list.unshift('Good morning!!'));
// console.log(list.get(1));
// console.log(list.set(2, '!!'));
// console.log(list.set(3, '!!'));
// console.log(list.pop());
// console.log(list.insert(2, '!!'));
// console.log(list.insert(3, '!!'));
// console.log(list.remove(1));
// console.log(list.length);
// console.log(list.get(0));
// console.log(list.get(3))
// console.log(list);
// console.log(list.head);
// console.log(list.head.next.next);
console.log(JSON.stringify(list.reverse()));
console.log(list);