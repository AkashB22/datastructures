function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
  
    if(arr.length === 0){
        return [];
    }  
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1))) ;
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']