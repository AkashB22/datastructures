function areThereDuplicates(...args){
    args.sort((a,b)=> a > b);
    
    let i = 0;
    let j = 1;
    
    while(i<args.length){
        if(args[i] === args[j]){
            return true;
        }
        i++;
        j++;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'));