function simpleHash(key, arrayLen){
    let total = 0;
    for(let char of key){
        const value = char.charCodeAt(0);
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log(simpleHash("pink", 10));
console.log(simpleHash("orangered", 10));
console.log(simpleHash("cyan", 10));
console.log(simpleHash("pink", 10));
console.log(simpleHash("blue", 10));