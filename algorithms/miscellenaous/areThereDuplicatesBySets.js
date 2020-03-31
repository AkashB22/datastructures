function areThereDuplicates(){
    let mySet = new Set(arguments);
    return (mySet.size !== arguments.length);
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'));