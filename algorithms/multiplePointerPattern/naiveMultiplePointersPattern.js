function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            let sum = arr[i] + arr[j];
            if(sum === 0){
                return [arr[i], arr[j]];
            } 
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2]));
console.log(sumZero([-3, -2, 0, 1]));
console.log(sumZero([1, 2, 3]));