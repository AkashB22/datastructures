function sameFrequency(num1, num2){
    if(!num1 || !num2){
        return false;
    }

    let num1StrArr = num1.toString();
    let num2StrArr = num2.toString();
    if(num1StrArr.length !== num2StrArr.length){
        return false;
    }

    let freqCount = {};

    for(let i=0; i<num1StrArr.length; i++){
        let num = num1StrArr[i];
        freqCount[num] = (freqCount[num]) ? freqCount[num] + 1 : 1;
    }

    for(let i=0; i<num2StrArr.length; i++){
        let num = num2StrArr[i];
        if(!freqCount[num]){
            return false;
        } else{
            freqCount[num] -= 1;
        }
    }

    return true;
}

console.log(sameFrequency(281, 182));
console.log(sameFrequency(34, 44));
console.log(sameFrequency(9876543210, 1234567890));
console.log(sameFrequency(001, 200));
console.log(sameFrequency(001, 100));
console.log(sameFrequency(7248901, 2840917));