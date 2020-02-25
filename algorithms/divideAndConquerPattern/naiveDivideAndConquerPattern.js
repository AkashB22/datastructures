function search(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1
}

console.log(search([1,2,3,4,5,6,7], 4));
console.log(search([1,2,3,4,5,6,7], 7));
console.log(search([1,2,3,4,5,6,7], 3));
console.log(search([1,2,3,4,5,6,7], 12));