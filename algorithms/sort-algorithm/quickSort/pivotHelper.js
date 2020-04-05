function pivotHelper(arr, start = 0, end = arr.length-1){
    function swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let pivotIndex = start;

    for(let i=start+1; i<=end; i++){
        if(arr[i] < pivot){
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    swap(arr, start, pivotIndex)

    console.log(arr);
    
    return pivotIndex;
}

console.log(pivotHelper([28, 41, 4, 11, 16, 1, 40, 14]));
console.log(pivotHelper([5, 1, 2, 8]));