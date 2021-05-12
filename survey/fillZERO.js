function paddingLeft(str,length){
	if(str.length >= length)
	    return str;
	else
	    return paddingLeft('0' +str,length);
}

let a = 1
console.log(paddingLeft(1,3))