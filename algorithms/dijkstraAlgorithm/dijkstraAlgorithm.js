class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
        
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a, b)=> a.priority - b.priority);
    }
}

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
