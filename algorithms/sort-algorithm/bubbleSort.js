// function bubbleSort(arr){
    
//     for(let i=arr.length; i>0; i++){
//         let noSwaps = true;
//         for(let j=0; j<i-1; j++){
//             if(arr[j+1] < arr[j]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps){
//             break;
//         }
//     }

//     return arr;
// }

// console.log(bubbleSort([9, 67, 09, 78521, 7]));
// console.log(bubbleSort([8, 4,5,3,1,0,2]));
// console.log(bubbleSort([9,3,7,2,5]));

// function bubbleSort(arr){
//     for(let i=arr.length; i>0; i--){
//         for(let j=0; j<i-1; j++){
//             console.log(arr, arr[j+1], arr[j])
//             if(arr[j+1] < arr[j]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//         console.log('one pass done');
//     }

//     return arr;
// }


function bubbleSort(arr){
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            console.log(arr, arr[j+1], arr[j])
            if(arr[j+1] < arr[j]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        console.log('one pass done');
    }

    return arr;
}
console.log(bubbleSort([6, 4, 15, 10, 311, 3,-34]));
console.log('done sorting');
