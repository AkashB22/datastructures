function flatten(arr){
    let newArr = [];
    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] instanceof Array){
        return flatten(arr[0].concat(arr.slice(1)));
    }
    newArr.push(arr[0]);
    newArr = newArr.concat(flatten(arr.slice(1)));

    return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]