function sum(x) {
    let total = 0;
    return function closureSum(x) {
        total += x;
        return total;
    };
}

let addToTotal = sum();

console.log(addToTotal(3));
console.log(addToTotal(5));
console.log(addToTotal(20));