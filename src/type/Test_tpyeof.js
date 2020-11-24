//typeof 判断原始数据类型都能正常返回
console.log(typeof 1);
console.log(typeof '1');
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof Symbol())

//判断引用类型，出来fun 都返回objec
console.log(typeof []);
console.log(typeof {});
console.log(typeof console.log)