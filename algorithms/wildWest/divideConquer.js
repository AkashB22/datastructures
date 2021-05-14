function countZeroes(arr){
    let zeroCount = 0;
    if(arr.length === 0) return 0;
    const mid = Math.floor(arr.length/2);
    let newArr = [];
    if(arr[mid] === 1){
        newArr = arr.slice(mid+1, arr.length);
        zeroCount += countZeroes(newArr);
    } else{
        zeroCount += arr.length - mid;
        newArr = arr.slice(0, mid);
        zeroCount += countZeroes(newArr);
    }
    return zeroCount;
}

// function countZeroes(arr){
//     let zeroCount = 0;
//     function subFunc(arr){
//         if(arr.length === 0) return zeroCount;
//         const mid = Math.floor(arr.length/2);
//         if(arr[mid] === 1){
//             arr = arr.slice(mid+1, arr.length);
//             return subFunc(arr);
//         } else{
//             zeroCount += arr.length - mid;
//             arr = arr.slice(0, mid);
//             return subFunc(arr);
//         }
//     }
    
//     return subFunc(arr);
// }

// function countZeroes(arr){
//     let newArr = arr.filter(val=>{
//         if(val===0) return true;
//         else return false;
//     })
//     return newArr.length;
// }

console.log(countZeroes([1,1,1,1,0,0]));
console.log(countZeroes([1,0,0,0,0]));
console.log(countZeroes([0,0,0,0]));
console.log(countZeroes([1,1,1,1]));