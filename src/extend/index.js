
Pareant.prototype.home = [];
function Pareant () {
    this.name = 'zp';
    this.age = 19;
    this.sex = 'male';
}

Child.prototype = new Pareant();

function Child () {
    Pareant.call(this);
    this.sex = 'female';
    this.classMate = 'cmm'
}

let duocter1 = new Child();
let duocter2 = new Child();
duocter1.home.push('ppp');
console.log(duocter2);

