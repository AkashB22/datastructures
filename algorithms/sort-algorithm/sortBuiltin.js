function numberCompare(a,b){
    return a-b;
}
function compareLen(str1, str2){
    return str2.length - str1.length;
}

console.log([6, 4, 15, 10].sort());
console.log([6,4,15,10].sort(numberCompare));
console.log(["steele", "colt", "data structures", "Algorithm"].sort());
console.log(["steele", "colt", "data structures", "Algorithm"].sort(compareLen));