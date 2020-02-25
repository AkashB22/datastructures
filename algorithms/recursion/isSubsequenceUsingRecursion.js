function isSubsequence(str1, str2){
    if(str1.length === 0){
        console.log(str1, str2);
        return true;
    } 
    if(str2.length === 0){
        console.log(str1, str2);
        return false;
    }
    if(str1[0] === str2[0]){
        console.log(str1, str2);
        return isSubsequence(str1.slice(1), str2.slice(1));
    }
    console.log(str1, str2);
    return isSubsequence(str1, str2.slice(1));
}

//console.log(isSubsequence('hello', 'hello world!'));
console.log(isSubsequence('sing', 'string'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'abc'));