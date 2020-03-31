function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0 ){
        return [];
    }
    let str = arr[0];
    str = str[0].toUpperCase().concat(str.slice(1));
    return [str].concat(capitalizeFirst(arr.slice(1)));
  }
  
  capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  