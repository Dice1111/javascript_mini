
//1st step
//console.log("Hello World");



// b = 20;
// var a = 10;
// let c = 30;
// const d = 40;
// console.log(a,b,c,d);


// const threshold = 3;
// let a = 10;
// if (a > threshold){
//     console.log("larger");
// }else{
//     console.log("smaller")
// }

 
// for(let i =0;i<10; i++){
//      console.log(i);
// }


// let i =0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let a = 10;
// let b = 20;

// function run_something(a,b){
//     return a + b;
// }

// console.log(run_something(a,b));


// class Rectangle{
//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }

//     getArea(){
//         return this.height * this.width;
//     }
// }

// const rectangle = new Rectangle(10,20);
// console.log(rectangle.getArea());
// rectangle.height = 100;
// console.log(rectangle.getArea());
// console.log(rectangle.height);

// const isactive = true;
// const num = 11;
// const letter = "apple";
// const num1 = 14.3552;

// console.log(num + num1);
// console.log (letter + num + num1);
function fizzBuzz(nTimes,name,name1){

    for(let x = 0; x <=nTimes; x++) {
        if (x % 5 === 0 && x %3 === 0) {
            console.log(name+name1)
        } else if (x % 5 === 0) {
            console.log(name)
        } else if (x % 3 === 0) {
            console.log(name1)
        } else {
            console.log(x)
        }
    }

}


fizzBuzz(20,"Fizz","Buzz");
