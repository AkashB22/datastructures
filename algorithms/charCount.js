function charCount(str){
    let obj = {};
    str = str.toLowerCase();
    str = str.replace(/\s/g, '');
    
    for(let char of str){
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
     return obj;
}

console.log(charCount('this is my pin111111111'));