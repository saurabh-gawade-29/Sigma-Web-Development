// Create a faulty calculator using js
/*
1. take 2 value from user
2. it perform wrong operation - 10% of the time
*/
let a = prompt("Enter first number: ");
let b = prompt("Enter Second Number: ");
let c = prompt("Enter Third Operator: ");
//! The datatype is String - need to convert to Number
let d = Number(a);
let e = Number(b);
let f = c;
//! c must be the operator
let op = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*"
}
//! now the condition - wrong operation 10% of the time
let random = Math.random();
console.log(random, "Random Number is:");
let check = random < 0.1;

if (check) {
    //* Correct Operation
    let result = eval(`${d} ${f} ${e}`);
    console.log(result, "if block result");
    alert(result);
} else {
    //* Wrong Operation
    c = op[c];
    let result = eval(`${d} ${c} ${e}`);
    console.log(result, "else block result");
    alert(result);
}

