function sortedFrequency(sortedArr, val){
    // add whatever parameters you deem necessary - good luck!
    let count = 0;
    function subHelper(arr, value){
        if(arr.length === 0) return;
        let middle = Math.floor(arr.length/2),
        left = arr.slice(0, middle),
        right = arr.slice(middle+1, arr.length);
        if(arr[middle] === value){
            count++;
            subHelper(right, value);
            subHelper(left, value);
        } else if(arr[middle] < value){
            subHelper(right, value);
        } else{
            subHelper(left, value);
        }
    }
    subHelper(sortedArr, val);
    return (count === 0) ? -1 : count;
}

// function sortedFrequency(sortedArr, val){
//     // add whatever parameters you deem necessary - good luck!
//     let count = 0;
//     for(let i=0; i<sortedArr.length; i++){
//         if(sortedArr[i] === val){
//             count++;
//         }
//     }
//     return (count === 0) ? -1 : count;
// }


console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3));