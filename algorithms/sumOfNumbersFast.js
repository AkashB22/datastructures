let {performance} = require('perf_hooks');

function addUpto(n){
    let sum = (n*(n+1))/2;

    return sum;
}

let t1 = performance.now();
addUpto(1000000000);
let t2 = performance.now();

console.log(`Time elapsed is ${(t2-t1)/1000} seconds`);