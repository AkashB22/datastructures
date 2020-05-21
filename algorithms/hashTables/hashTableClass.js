class HashTable{
    constructor(value = 53){
        this.keyMap = new Array(value);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i<Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, val){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        let exists = false;
        for(let i=0; i< this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key){
                exists = true;
                this.keyMap[index][i][1] = val;
            }
        }
        if(!exists) this.keyMap[index].push([key, val]);

        return this;
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i=0; i< this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys(){
        let keysArr = [];
        for(let i=0; i <this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values(){
        let valuesArr = [];
        for(let i=0; i <this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let hash = new HashTable(17);
hash.set("pink", "#ff0000");
hash.set("green", "#ff0001");
hash.set("yellow", "#ff0002");
hash.set("cyan", "#ff0003");
hash.set("red", "#ff0004");
hash.set("orange", "#ff0004");
hash.set("orangered", "#ff0005");
hash.set("orangered", "double!!");
hash.set("green", "duplicate!!");
// console.log(hash.keyMap);
// console.log(hash.get("pink"));
// console.log(hash.get("green"));
// console.log(hash.get("yellow"));
// console.log(hash.get("cyan"));
// console.log(hash.get("red"));
// console.log(hash.get("blue"));
console.log(hash.keys());
console.log(hash.values());