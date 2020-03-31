function collectStrings(obj){
    let newArr = [];
    for(let value of Object.values(obj)){
        if(value instanceof Object && !(value instanceof Array)){
            newArr = newArr.concat(collectStrings(value));
        } else if(typeof(value) === 'string'){
            newArr.push(value);
        }
    }

    return newArr;
}

const obj4 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj4) // ["foo", "bar", "baz"])