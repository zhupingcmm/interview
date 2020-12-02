
function MyPromise(excutor){
    var _onResolve = null;
    var _onReject = null;

    this.then = function(onResolve, onReject){
        _onResolve = onResolve; 
    }

    function resolve (value){
        setTimeout(()=>{
            _onResolve(value)
        })
    }
    excutor(resolve, null);
}

function excutor (resolve, reject){
    resolve(100);
    console.log(2)
}

const p1 = new Promise(excutor);

function onResolve(value){
    console.log(value)
}
p1.then(onResolve).then(()=>console.log(1111));