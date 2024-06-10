//? Basic
{
    let a = 5.5;
    var b = 5.5;
}
//! you cannot access let a => block scope 
//console.log(a); //! gives you error a is not defined
console.log(b); //* you can access

function check() {
    let c = 5.5;
    var a = 5.5;
}

//! You Cannot Access both Variables.
// console.log(c);
// console.log(a);

//? Redecalre

let d = 5.5;
// let d = 5.6; You cannot re-declare

var e = 5.5;
var e = 6.6; //* you can redeclare variable

//! Hoisting: - not possible in const and let
hoist_b = "Possible";
console.log("Check Hoisting: ", hoist_b);
// console.log("Check Hoisting: ",hoist_a);
// let hoist_a = "not possible";
var hoist_b;
