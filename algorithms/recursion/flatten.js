function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
	let newArr = [];
	if(arr.length === 0){
		return [];
	} 
  if(arr[0] instanceof Array) {
		//console.log(arr[0]);
		return flatten(arr[0].concat(arr.slice(1)));
	}
	newArr.push(arr[0]);
	newArr = newArr.concat(flatten(arr.slice(1)));
	return newArr;
}

console.log(flatten([1, [2, 3], 4 ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]