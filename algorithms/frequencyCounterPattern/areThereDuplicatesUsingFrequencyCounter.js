function areThereDuplicates(...args){
    let freqCount = {};

    for(let i=0; i<args.length; i++){
        let val = args[i];
        freqCount[val] = (freqCount[val])?  freqCount[val] + 1 : 1;
    }

    for(let key of Object.keys(freqCount)){
        if(freqCount[key] !== 1){
            return true
        }
    }

    return false;
}

console.log(areThereDuplicates(1,2,3,4,5,5));