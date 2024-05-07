let age = 17;

//! If Statement
if (age > 18) {
    console.log("You Can Drive - if statement");
}

//! If-else Statement
if (age > 18) {
    console.log("You Can Drive - if-else statement");
} else {
    console.log("You cannot drive- if-else statement");
}

//! if-else Ladder
if (age > 0) {
    console.log("A Valid Age");
    if (age > 0 && age < 18) {
        console.log("Are you kidding");
    }
} else if (age > 18) {
    console.log("You can drive");
} else {
    console.log("You Cannot Drive");
}

//* You can write multiple else if statement

//! Operator Basic learn in javascript-zero to hero
//! REPL - Read Evaluate Print Loop

// * Comments are non executable part of your code
//! Single Line comment: //
//! Mutiline Comment: /* */

//* Ternary Conditions:
let a = 5;
let b = 6;
let c = a < b ? b - a : "a is less than b";
console.log(c);