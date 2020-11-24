

function myInstanceOf (left, right){
    //如果左边不为对象直接返回false
    if(typeof left !== 'object'|| left === null) return false;
    //拿到左边原型对象
    let proto = Object.getPrototypeOf(left);
    while(true){
        //知道原型对象为null， 返回false
        if(proto === null) return false;
        //左边的原型对象和右边的原型对象指向同一内存地址，返回true
        if(proto === right.prototype) return true;

        //继续拿
        proto = Object.getPrototypeOf(proto)
    }
    
}

function Person (){
    this.name = 'zp'

}

const p = new Person();

console.log(myInstanceOf(p, Person))
