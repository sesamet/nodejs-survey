function callName() {
    console.log(this.name);
}
  
var auntie = {
    name: '漂亮阿姨',
    callName: callName,
    watch: {
        name: 'Magic Watch',
        callName: callName
    }
}
  
auntie.callName()
auntie.watch.callName()