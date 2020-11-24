
Pareant.prototype.home = [];
function Pareant () {
    this.name = 'zp';
    this.age = 19;
    this.play =[1,2,3];
}

// Child.prototype = new Pareant();
Child.prototype = Object.create(Pareant.prototype);
Child.prototype.constructor = Child;

function Child () {
    Pareant.call(this);
    this.sex = 'female';
    this.classMate = 'cmm'
}

let duocter1 = new Child();
let duocter2 = new Child();
duocter1.home.push('ppp');
console.log(duocter2);

