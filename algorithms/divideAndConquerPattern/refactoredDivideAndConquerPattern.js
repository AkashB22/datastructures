function search(arr, val){
    let min = 0;
    let max = arr.length - 1;

    while(min <= max){
        let middle = Math.floor((min+max)/2);
        let currentValue = arr[middle];
        if(currentValue < val){
            min = middle + 1;
        } else if(currentValue > val){
            max = middle - 1
        } else{
            return middle;
        }
    }

    return -1;
}

// console.log(search([1,2,3,4,5,6,7], 4));
console.log(search([1,2,3,4,6,7], 5));
// console.log(search([1,2,3,4,5,6,7], 3));
// console.log(search([1,2,3,4,5,6,7], 12));