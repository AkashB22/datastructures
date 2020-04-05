function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(197));
console.log(digitCount(19));
console.log(digitCount(1923097));