let {performance} = require('perf_hooks');

function addUpto(n){
    let sum = 0;

    for(let i=1; i<=n; i++){
        sum = sum +i
    }
    return sum;
}

let t1 = performance.now();
addUpto(1000000000);
let t2 = performance.now();

console.log(`Time elapsed is ${(t2-t1)/1000} seconds`);