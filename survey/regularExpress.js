// Qn answer
let str = '@Q3 answer jdjaosjda=@Q4 answer'
let regEx = /@Q\d+ answer/g;

function QnReplace(Qn, a, offset, s) {
    return '['+Qn.substring(2,Qn.indexOf(' answer'))+']';
}
console.log(str.match(regEx))
// console.log(str2.match(regEx))
console.log(str.replace(regEx, QnReplace))

// function convert(str, p1, offset, s) {
//     return ((p1 - 32) * 5/9) + 'C';
// }
// var s = '68F,77F';
// var test = /(-?\d+(?:\.\d*)?)F\b/g;
// console.log(s.replace(test, convert))

// if(str.match(regEx)){
//     console.log(str);
//     console.log(str.)
// }else{
//     console.log('no');
// }

// var str = "iid0000ffr";
// var substr = str.match(/id(\S*)ff/);
// console.log(substr2);