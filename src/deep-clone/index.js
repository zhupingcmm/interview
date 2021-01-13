
let jack = {
    name : "jack.ma",
    age:40,
    like:{
        dog:{
            color:'black',
            age:3,
        },
        cat:{
            color:'white',
            age:2
        }
    }
}

function deepCopy(source){
    if(typeof source !== 'object' || source === null) return source;
    const result = source instanceof Array ? [] : {};
    for(const key in source){
        if(source.hasOwnProperty(key)){
            result[key] = (source && typeof source === 'object') ? deepCopy(source[key]) : source[key]
        }
    }

    return result;
}
let jack2 = deepCopy(jack)

//比如修改jack2中的内容，不会影响到jack中的值
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color) //打印出来的应该是 "black"