

// //Using for loop.....................
// function twoSum(arrayNum, target) { 
//     for (let i = 0; i < arrayNum.length; i++) {
//         if(i != arrayNum.length - 1){
//             for (let x =i+1; x < arrayNum.length; x++){
//                 if(arrayNum[i]+arrayNum[x] === target){
//                     console.log([i, x]);
//                     return;    
//                 }
//             }
//         }else if( i == arrayNum.length - 1){
//             console.log("no valid number.");
//         }
//     }
// }
// console.log("\nUsing for loop")
// twoSum([3, 7, 2, 11,6,23], 25)
// twoSum([3,2,4,6], 9)
// twoSum([3,2,4,6], 7)
// twoSum([4,4], 8)
// twoSum([3,2,1], 6)



// //Using While loop......................
// function twoSumWhile(arraySum, target){
//     let a = 0;
//     let b = a+1;
//     while(true){
//         if (b < arraySum.length){
//             if (arraySum[a] + arraySum[b] == target){
//                 console.log([a,b]);
//                 break;
//             }
//             b++;        
//         }else if (b == arraySum.length ){
//             a++;
//             b = a+1;
        
//         }else if (a == arraySum.length){
//             console.log("no valid number.")
//             break;
//         }
//     }
// }
// console.log("\nUsing While loop");
// twoSumWhile([3,7,2,11,6,23], 25)
// twoSumWhile([3,2,4,6],9)
// twoSumWhile([3,2,4,6],7)
// twoSumWhile([4,4],8)
// twoSumWhile([3,2,1],6)




// Using nested loop is easy but I try to write with single loop Xd. 
function twoSum( numArray, target ){
    console.log(numArray);
    a=0;
    firstNumber = numArray[a];
    let compareIndex =a+1;
    let counter =0;
    while(firstNumber + numArray[compareIndex] != target){
        counter++;
        compareIndex++;
        if(counter == numArray.length-((numArray.indexOf(firstNumber))+1)){
            a++;
            firstNumber = numArray[a];
            compareIndex=a+1;
            counter=0;

        }
        if( 1 == numArray.length-((numArray.indexOf(firstNumber))+1) && firstNumber + numArray[compareIndex] != target ){
            console.log("No data found");
            return;
         }
    }


    console.log(numArray.indexOf(firstNumber), compareIndex)


}
twoSum([3, 7, 2, 11,6,23], 80)
twoSum([3,2,4,6], 9)
twoSum([3,2,4,6], 10)
twoSum([4,4],8)
twoSum([3,2,1],3)