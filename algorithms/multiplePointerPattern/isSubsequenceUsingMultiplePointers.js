function isSubsequence(str1, str2){
    // let start=0;
    // let nextStart=1;
    // let temp = '';
    // for(let j=0; j<str2.length; j++){
    //     if(str1[start] === str2[j]){
    //         temp = (temp)? temp + str1[start] : str1[start];
    //         start++;
    //     }
    // }
    // if(str1.length === temp.length){
    //     for(let i=0; i<temp.length; i++){
    //         if(temp[i] === str1[i]){
    //             return true;
    //         }
    //     }
    // }
    // return false;
    let i=0; 
    let j=0;

    if(!str1) return true;

    while(j<str2.length){
        if(str2[j] === str1[i]){
            i++;
        }
        if(i === str1.length) return true
        j++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world!'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));