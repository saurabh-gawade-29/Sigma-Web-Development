//! Functions
function greet(name) {
    console.log("Hey " + name + " You are nice");
}
greet("saurabh");
greet("Uday");

//! Sum of Two Number 
function sum(a, b) {
    // console.log("Sum is: " + a + b); //! Concat here - need to wrap in ()
    console.log("Sum is: " + (a + b));
    return false
}
let check = sum(5, 5);
console.log(check)

//* You can write like this - with return keyword
function summ(c, d) {
    return c + d;
}
let result = summ(3, 6);
console.log("Result is: " + result);