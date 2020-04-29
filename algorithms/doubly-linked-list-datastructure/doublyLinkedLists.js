class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }   

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        
        const poppedNode = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift(){
        if(!this.head) return undefined;

        const oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;

        let current, count;

        if(index < this.length / 2){
            current = this.head;
            count = 0
            // console.log('from HEAD');
            while(count < index){
                current = current.next;
                count++;
            }
        } else{
            current = this.tail;
            count = this.length - 1;
            // console.log('from TAIL');
            while(count > index){
                current = current.prev;
                count--;
            }
        }
        
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        
        if(foundNode){
            foundNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
        let newNode = new Node(val);

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;

        return this;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;

        return removedNode;
    }

    // reverse(){
    //     let node = this.head;
    //     this.head = this.tail;
    //     this.tail = node;
        
    //     let next;
    //     let prev = null;
    //     for(let i=0; i<this.length; i++){
    //         next = node.next;
    //         node.next = prev;
    //         node.prev = next;
    //         prev = node;
    //         node = next;
    //     }

    //     return this;
    // }

    reverse(){
        let node = this.tail;
        this.tail = this.head;
        this.head = node;

        for(let i=0; i<this.length; i++){
            let next = node.next;
            let prev = node.prev;
            node.next = node.prev;
            node.prev = next;
            node = prev;
        }

        return this;
    }
}

let list = new DoublyLinkedList();

// list.push(20);
// list.push(21);
// list.push(22);
// list.push(23);
// list.push(24);
// list.push(25);
// list.push(26);
// list.push(27);
// list.push(28);
// list.push(29);
// list.push(30);
list.push('malfoy');
list.push('ron');
list.push('hermoine');
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.head.next.next.prev.prev.prev);
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.unshift("harry"));
// console.log(list.unshift("ron"));
// console.log(list.unshift("hermoine"));
// console.log(list.head);
// console.log(list.head.next);
// console.log(list.head.next.next);
// console.log(list.get(-1));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(6));
// console.log(list.get(8));
// console.log(list.get(9));
// console.log(list.get(129));
// console.log(list.set(2, 'harry'));
// console.log(list.set(-1, 'hagrid'));
// console.log(list);
// console.log(list.insert(1, "harry"));
console.log(list.reverse());

