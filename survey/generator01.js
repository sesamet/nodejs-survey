function * count() {
    yield 1
    yield 2
    return 3
}

var c = count()

console.log('0.',c) // { value: 1, done: false }
console.log('1.',c.next()) // { value: 1, done: false }
console.log('2.',c.next()) // { value: 2, done: false }
console.log('3.',c.next()) // { value: 3, done: true }
console.log('4.',c.next()) // { value: undefined, done: true }