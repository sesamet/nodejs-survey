let a ={
    aaa: 123,
    bbb: 456,
}

function jsonCopy(input){
    input.aaa = 789;
}

console.log(a);
jsonCopy({...a})
console.log(a);

