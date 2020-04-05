function quickSort(arr, left = 0, right = arr.length -1){

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
    
        swap(arr, start, pivotIndex);
    
        // console.log(arr);
        
        return pivotIndex;
    }
    
    if(left < right){
        let index = pivotHelper(arr, left, right);

        quickSort(arr, left, index-1);
        quickSort(arr, index+1, right)
    }
    
    return arr;
}

console.log(quickSort([5,1,2,8,6]));
// console.log(quickSort([3,2,1,4,5,7,6,8]));