function simpleHash(key, arrayLen){
    let total = 0;
    for(let char of key){
        const value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log(simpleHash("pink", 10)); // 0
console.log(simpleHash("orangered", 10)); // 7
console.log(simpleHash("cyan", 10)); // 3
console.log(simpleHash("pink", 10)); // 0
console.log(simpleHash("blue", 10));// 0