// function sum(x) {
//     let total = 0;
//     return function closureSum(x) {
//         total += x;
//         return total;
//     };
// }
//
// let addToTotal = sum();
//
// console.log(addToTotal(3));
// console.log(addToTotal(5));
// console.log(addToTotal(20));


// function makeCounter(){
//     let count = 0;
//     return function (){
//         return count++
//     }
// }
// const counter = makeCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter())