a = '@Q3 answerklaskafpa@Q4 answer';

// console.log(a.indexOf('@'))
// console.log(a.indexOf('@Q'))
// console.log(a.indexOf(' answer'))
// console.log(a.substring(1,4))

b = a.split('@Q')
console.log(b)


// c = b[1].split(' answer')
// console.log(c)

// console.log(parseInt(c[0]));
// console.log(parseInt('c'));
// console.log(parseInt('2 '));
// if(!parseInt('c')){
//     console.log('非數字');
// }
console.log('"'+b[1].substring(0, b[1].indexOf(' answer'))+'"')

let number1 = "111123213"
let number2 = "111123213aaa"

console.log(Number(number1));
console.log(Number(number2));
if(Number(number1)){
    console.log('is');
}else{
    console.log('not');
}

