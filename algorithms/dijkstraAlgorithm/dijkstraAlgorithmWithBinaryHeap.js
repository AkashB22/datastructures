class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdges(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    dijkstraAlogrithm(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        let smallest;

        // console.log(this.adjacencyList);

        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            };
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbour in this.adjacencyList[smallest]){
                    const nextNode = this.adjacencyList[smallest][neighbour];
                    const candidate = distances[smallest] + nextNode.weight;
                    const nextNeightbour = nextNode.node;
                    if(candidate < distances[nextNeightbour]){
                        distances[nextNeightbour] = candidate;
                        previous[nextNeightbour] = smallest;
                        nodes.enqueue(nextNeightbour, candidate);
                    }
                }
            }
        }

        return path.concat(start).reverse();
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

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdges("A", "B", 4);
graph.addEdges("A", "C", 2);
graph.addEdges("B", "E", 3);
graph.addEdges("C", "D", 2);
graph.addEdges("C", "F", 4);
graph.addEdges("D", "E", 3);
graph.addEdges("D", "F", 1);
graph.addEdges("E", "F", 1);
console.log(graph.dijkstraAlogrithm("A", "E"));