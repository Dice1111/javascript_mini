// const greeting = ()=> {
//     console.log("apple");
// }

// const sums= (a,b) => {
//     return a+b;
// };

// console.log(sums(10,20));

// const sums = (a,b) => a + b;

// console.log(sums(10,20));

// const getObj = (name,age) => {
//     return{
//         name:name,
//         age:age,
//     };
// };

// console.log(getObj('Mg Mg', 24));

// const getObj = (name, age) => ({ name, age });

// console.log(getObj("Mg Mg", 24));



const getObj = (name,age) => {
    return{
        [name]:name,
        [age]:age,
    };
};

console.log(getObj('Mg Mg', 24));
