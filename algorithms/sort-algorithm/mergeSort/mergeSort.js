function mergeSort(arr){
    function mergeTwoSortedArrays(arr1, arr2){
        let results = [];
        let i=0, j=0;
    
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] < arr2[j]){
                results.push(arr1[i])
                i++;
            } else{
                results.push(arr2[j]);
                j++;
            }
        }
    
        while(i<arr1.length){
            results.push(arr1[i]);
            i++;
        }
    
        while(j<arr2.length){
            results.push(arr2[j]);
            j++;
        }
        
        return results;
    }

    if(arr.length <= 1){
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return mergeTwoSortedArrays(left, right);
}

console.log(mergeSort([5, 3, 4, 1, 2]));