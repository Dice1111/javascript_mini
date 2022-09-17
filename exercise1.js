const greeting = function(){
    console.log('hello')
}

function logFuncName(val){
    val();
    console.log("Function Name",val)
}

logFuncName(greeting);
