function radixSort(arr){
    function getDigit(num, digit){
        return Math.floor(Math.abs(num)/ Math.pow(10, digit)) % 10;
    }
    function digitCount(num){
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
    function maxDigits(nums){
        let maxDigits = 0;
        for(let i=0; i<nums.length; i++){
            maxDigits = Math.max(maxDigits, digitCount(nums[i]))
        }

        return maxDigits;
    }

    let maxDigitsGiven = maxDigits(arr);
    
    for(let i=0; i<maxDigitsGiven; i++){
       let tempArr = [[], [], [], [], [], [], [], [], [], []];
       for(let j=0; j<arr.length; j++){
           let digitFound = getDigit(arr[j], i);
           tempArr[digitFound].push(arr[j]);
       }
       arr = [];
       for(let k=0; k<tempArr.length; k++){
        for(let m=0; m<tempArr[k].length; m++){
            arr.push(tempArr[k][m]);
        }
       }
    }
    
    return arr;
}

console.log(radixSort([123,543,3554,23,6,325,75,2143,63,4]));
console.log(radixSort([1556, 3556, 593, 408, 4386,902,7,8157,86,9637,29]));