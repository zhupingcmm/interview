
Parent.prototype.home = [];
function Parent(){
    this.name= 'zp'
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constractor = Child;

function Child(){
    Parent.call(this);
    this.sex ='male';
}

let duocter1 = new Child();
let duocter2 = new Child();
// duocter1.home.push('ppp');
console.log(duocter2.home.push('asd'));

