const changeValue = function(val){
    val = 100;
};

let x = 10;
console.log(x);
changeValue(x);
console.log(x);

const changeArrValue = function(val){
    val[0] = 100;
}

let arr =[1,2,3];
console.log(arr);
changeArrValue(arr);
console.log(arr);
