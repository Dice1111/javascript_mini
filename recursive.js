// Recursive function
const factorial = function(n){
    
    // if (n==1){
    //     return 1;
    // }
    // return n * factorial(n-1);

    return n==1 ? 1: n*factorial(n-1);
}


console.log(factorial(5));


