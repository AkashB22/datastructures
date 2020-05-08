class Node{
    constructor(value){
        this.value = value,
        this.left = null;
        this.right = null;
        // this.frequency = 1;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return this;
        } 
        let current = this.root;
        while(true){
            if(value === current.value){
                // current.frequency++;
                return this;
            }
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else{
                if(current.right === null){
                    current.right= newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return undefined;

        let current = this.root, 
            found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else{
                found = true;
            }
        }

        if(!found) return undefined;
        return current;
    }

    contains(value){
        if(this.root === null) return false;

        let current = this.root, 
            found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else{
                return true
            }
        }

        return false
    }

    breadthFirstSearch(){
        if(this.root === null) return [];

        const queue = [],
            data = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    depthFirstPreOrderSearch(){
        if(this.root === null) return [];

        const data = [];
        let current = this.root;
        function tranverse(node){
            data.push(node.value);
            if(node.left) tranverse(node.left);
            if(node.right) tranverse(node.right);
            return data;
        }

        return tranverse(current);
    }

    depthFirstPostOrderSearch()
    {
        if(this.root === null) return [];

        const data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
            return data;
        }
        return traverse(current);
    }

    depthFirstInOrderSearch(){
        if(this.root === null) return [];

        const data = [],
            current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
            return data;
        }

        return traverse(current);
    }
}

let tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(8);
// tree.root.left.right = new Node(9);
// console.log(tree);

tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.find(100));
// console.log(tree.find(21));
// console.log(tree.find(3));
// console.log(tree.find(15));
// console.log(tree.find(8));
// console.log(tree.contains(100));
// console.log(tree.contains(21));
// console.log(tree.contains(3));
// console.log(tree.contains(15));
// console.log(tree.contains(8));
// console.log(JSON.stringify(tree));
// console.log(tree.depthFirstPreOrderSearch());
console.log(tree.depthFirstInOrderSearch());