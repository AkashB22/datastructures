function stringifyNumbers(obj){
    let newObj = {};

    for(let [key, value] of Object.entries(obj)){
        if(typeof(value) === 'number'){
            newObj[key] = value.toString();
        } else{
            newObj[key] = value;
        }
        
        if(value instanceof Object && !(value instanceof Array)){
            newObj[key] = stringifyNumbers(value);
        }
    }

    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
