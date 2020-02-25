function maxSubarraySum(arr, num){
    if(arr.length < num){
        return null;
    }

    let maxSum = 0;
    for(let i=0; i<arr.length- num + 1; i++){
        let tempSum = 0;
        for(let j=0; j<num; j++){
            tempSum += arr[i+j];
        }

        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,5,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([4,2,1,6,2], 4));
console.log(maxSubarraySum([], 4));
