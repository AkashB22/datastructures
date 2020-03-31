// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         let currentValue = arr[i];
//         let j;
//         for(j=i-1; j>=0 && arr[j] > currentValue; j--){
//             arr[j+1] = arr[j];
//         } 
//         arr[j+1] = currentValue;
//     }

//     return arr;
// }

// console.log(insertionSort([9, 67, 09, 78521, 7]));
// console.log(insertionSort([8, 4,5,3,1,0,2]));
// console.log(insertionSort([9,3,7,2,5]));

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];
        let j;
        for(j=i-1; j>=0 && (arr[j] > currentValue); j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }

    return arr;
}

console.log(insertionSort([1, 4, 3, 2]));
console.log(insertionSort([1, 4, 3, 2, 0]));
console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([6, 4, 15, 10, 311, 3,-34]));
console.log(insertionSort([6, 311, 4, 15, 10, 3,-34]));