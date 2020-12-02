
function* genDemo() {
    console.log("开始执行第一段")
    yield 'generator 1'

    console.log("开始执行第二段")
    yield 'generator 2'

    console.log("开始执行第三段")
    yield 'generator 3'

    console.log("执行结束")
    return 'generator 4'
}

console.log('main 0')
let gen = genDemo()
console.log("abddbb")
console.log(gen.next().value)
console.log('main 1')
console.log(gen.next().value)
console.log('main 2')
console.log(gen.next().value)
console.log('main 3')
console.log(gen.next().value)
console.log('main 4')

// main 0
// 开始执行第一段
// generator 2
// 开始执行第二段