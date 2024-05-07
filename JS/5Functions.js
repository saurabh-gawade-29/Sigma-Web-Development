//! Functions -  Reusablity
function greet(name) {
    console.log("Hey " + name + " You are nice");
}
greet("saurabh");
greet("Uday");

//! Sum of Two Number 
function sum(a, b) {
    // console.log("Sum is: " + a + b); //! Concat here - need to wrap in ()
    console.log("Sum is: " + (a + b));
    return false;
}
let check = sum(5, 5);
console.log(check);

//* You can write like this - with return keyword
function summ(c, d) {
    return c + d;
}
let result = summ(3, 6);
console.log("Result is: " + result);

//! Default Parameter
function sumThree(e, f, g = 5) {
    return e + f + g;
}

let resultThree = sumThree(5, 5); //g=5
let resultThreeWithG = sumThree(5, 5, 6); //g=5
console.log(resultThree, "Sum of three number");
console.log(resultThreeWithG, "Sum of three number with G");

//! Arrow Function - ananymous function - direct return without {}
//* Sum Of two number using arrow Function
let arrowFunction = (h, i) => h + i;
console.log(arrowFunction(5, 5));

//! Arrow Function - without () and without {}
let anotherArrowFunction = a => a;
console.log(anotherArrowFunction(5));