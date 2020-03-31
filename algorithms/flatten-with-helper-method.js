function flatten(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length <= 0){
            return;
        }
        if(helperInput[0] instanceof Array){ 
            return helper(helperInput[0].concat(helperInput.slice(1))); 
        }
        result.push(helperInput[0]);
        return helper(helperInput.slice(1));   
    }
    helper(arr);
    console.log(result);
}

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]