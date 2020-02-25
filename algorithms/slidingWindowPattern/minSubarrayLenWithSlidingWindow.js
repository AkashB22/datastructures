function minSubarrayLength(arr, givenSum){
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start< arr.length){
        if(total < givenSum && end<arr.length){
            total += arr[end];
            end++;
        } else if(total >= givenSum){
            minLen = Math.min(minLen, end-start);
            total -= arr[start];
            start++;
        } else{
            break;
        }

        //console.log(`Start - ${start}, End - ${end}, Total - ${total}, GivenSum- ${givenSum} MinLen - ${minLen}, Array- ${arr}`)
    }

    return minLen === Infinity ? 0 : minLen;
}

//console.log(minSubarrayLength([1,4,2,6,5], 6))// 1
//console.log(minSubarrayLength([4,3,3,8,1,2,3], 11));// 2
//console.log(minSubarrayLength([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1
console.log(minSubarrayLength([1,4,16,22,5,7,8,9,10], 39)); // 3
console.log(minSubarrayLength([1,4,16,22,5,7,8,9,10], 55)); // 5
console.log(minSubarrayLength([4,3,3,8,1,2,3], 11)); // 2
console.log(minSubarrayLength([1,4,16,22,5,7,8,9,10], 95)); // 0
