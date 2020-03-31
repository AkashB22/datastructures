// function selectionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let minIndex = i;
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         if(minIndex !== i){
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }
//     }

//     return arr;
// }

// console.log(selectionSort([9, 67, 09, 78521, 7]));
// console.log(selectionSort([8, 4,5,3,1,0,2]));
// console.log(selectionSort([9,3,7,2,5]));

function selectionSort(arr){
    
    for(let i=0; i< arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j ;
            }
        }
        if(minIndex != i){
            console.log("*************")
            console.log(arr, i, minIndex);
            console.log("SWAPPING TO: ")
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            console.log(arr);
            console.log("*************");
        }
        console.log("not swapped")
    }
    return arr;
}

console.log(selectionSort([6, 311, 4, 15, 10, 3,-34]));