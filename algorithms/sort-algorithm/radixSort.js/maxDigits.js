function maxDigits(nums){
    function digitCount(num){
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

console.log(maxDigits([13213,8325,283748932,823648,82374]));