function compose(...funcs) {

    console.log("sa",funList)
    if (funcs.length === 0) {
      return arg => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
  }

const funList = [];

const f1 = (abc) =>{
    console.log('a',abc)
};
const f2 = (abc) =>{
    console.log('b',abc)
    return abc;
};

funList.push(f1)
funList.push(f2);

console.log(compose(...funList)('adsad'))
