class PriorityQueue{
    constructor(){
        this.queue = [];
    }

    enqueue(value, priority){
        this.queue.push({value, priority});
        this.sort()
    }

    dequeue(){
        return this.queue.shift();
    }

    sort(){
        this.queue.sort((a, b)=> a.priority > b.priority);
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(12, 10);
priorityQueue.enqueue(33, 5);
priorityQueue.enqueue(28, 20);
priorityQueue.enqueue(85, 1);
priorityQueue.enqueue(83, 2);
priorityQueue.enqueue(83, 0.5);
console.log(priorityQueue.queue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.queue);