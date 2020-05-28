class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v=> v!==vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v=> v!==vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            result.push(vertex);
            visited[vertex] = "true";

            adjacencyList[vertex].forEach((neighbour)=>{
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            })

        })(start);

        return result;
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(stack.length){
            // console.log(stack)
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }

        return result;
    }

    breadthFirstIterative(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(queue.length){
            // console.log(queue);
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].reverse().forEach((neighbour)=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }

        return result
    }
}

let graph = new Graph();
// graph.addVertex("himalayas");
// graph.addVertex("tokyo");
// graph.adjacencyList["tokyo"].push("something");
// graph.addVertex("kanyakumari");
// graph.addVertex("tokyo");
// graph.addEdge("tokyo", "kanyakumari");
// graph.addEdge("himalayas", "kanyakumari");
// graph.addEdge("himalayas", "tokyo");
// console.log(graph.adjacencyList);
// graph.removeEdge("kanyakumari", "himalayas");
// graph.removeEdge("tokyo", "kanyakumari");
// graph.removeVertex("kanyakumari");
// console.log(graph.adjacencyList);
// graph.removeVertex("himalayas");
// console.log(graph.adjacencyList);
// console.log(graph.depthFirstSearch("tokyo"));
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
// console.log(graph.depthFirstRecursive("A"));
// console.log(graph.depthFirstIterative("A"));
console.log(graph.breadthFirstIterative("A"));