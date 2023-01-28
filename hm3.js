function sum(x) {
    let total = 0;
    return function addToTotal(y) {
        total += y;
        return total;
    }
}

let add = sum(3);
console.log(add(5))
console.log(add(20))