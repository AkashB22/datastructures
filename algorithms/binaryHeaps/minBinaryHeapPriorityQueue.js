class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        const newNode = new Node(val, priority);

        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];

            if(parent.priority <= element.priority) break;
            this.values[parentIdx] = this.values[idx];
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let idx = 0;
        let element = this.values[idx];

        while(true){
            const leftChildIdx = (2 * idx) + 1;
            const rightChildIdx = (2* idx) + 2;
            let leftChild, rightChild;
            let swap = null;
            const length = this.values.length;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const heap = new PriorityQueue();

heap.enqueue("common cold", 5);
heap.enqueue("gunshot wound", 1);
heap.enqueue("broken hand", 2);
heap.enqueue("high fever", 4);
heap.enqueue("glass on foot", 3);
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());