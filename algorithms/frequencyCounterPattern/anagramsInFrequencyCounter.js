function anagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounter1 = {};

    for(let char of str1){
        frequencyCounter1[char] = frequencyCounter1[char] ? frequencyCounter1[char] + 1 : 1; 
    }

    for(let i=0; i< str2.length; i++){
        let letter = str2[i];

        if(!frequencyCounter1[letter]){
            return false;
        }else{
            frequencyCounter1[letter] -= 1;
        }
    }

    return true;
}

console.log(anagram("cameras", "cameraa"));