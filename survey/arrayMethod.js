// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => words.indexOf(word)!==0);
// console.log(result);

// const words = [{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}    
// ];
// const result = words.filter(word => word.id===1);
// console.log(words[1]);
// console.log(result);
// const nullArray = [1,null,1];
// words.map((item)=> {return console.log(item.id)});
// console.log('==============');
// console.log(nullArray.indexOf(1));
// console.log(nullArray.indexOf(null));
// console.log(nullArray.indexOf(2));

// const defaultArray = new Array(4).fill(0)
// console.log('==============');
// console.log(defaultArray.join('-'));
// console.log(defaultArray);

// const sortTest = [0,5,2,3];
// console.log('==============');
// console.log(sortTest.join('-'));
// console.log(sortTest.sort().join('-'));
// console.log(sortTest);

// const ifArray = 1;
// if(ifArray===null || !ifArray.length){
//     console.log('In if');
// } else {
//     console.log('In else');
// }

// const ans = "";
const ans = [];
// const ans = 0;
// const ans = null;
// const ans = {aaa:'',bbb:''}
console.log(Array.isArray(ans))
// if(ans || ans.length){
//     console.log('In if', ans.length);
// } else {
//     console.log('In else');
// }

var colors = ["red", "blue", "grey"];
var color = colors.pop(0);
console.log('color:', color);
console.log('colors:', color);