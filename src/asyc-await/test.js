
async function foo() {
    console.log('foo')
    let a = await 100;
    console.log(a)
}
async function bar() {
    console.log('bar start')
    await foo()
    console.log('bar end')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
bar();
new Promise(function (resolve) {
    console.log('promise executor')
    resolve();
}).then(function () {
    console.log('promise then')
})
console.log('script end')
// 1.首先行执同步任务 console.log('script start')
// 2. 遇到setTimeOut() 添加到微任务队列
// 3. bar()
// 4.打印 console.log('bar start'), 遇到awiat foo()之后，new Promise(foo()),此时foo函数被执行，打印 console.log('foo')，接下来遇到await 100, new Promise((resolve, reject){ resolve(100)})
// 5. 遇到 new Promise(function (resolve) {} ，打印 console.log('promise executor') ，将then 推入微任务队列
// 6.console.log('script end')
