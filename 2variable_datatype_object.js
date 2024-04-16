//! 7 Premitive Datatype
/* 
1. string, 
2. number, 
3. boolean, 
4. null,
5. undefined,
6. symbol,
7. BigInt
*/

// How to Define a Variable -With Different DT
var a = 5;
var b = 5.5;
var c = "Saurabh";
var d = true;
var e = false;
var j = undefined;
var k = null;

console.log(typeof (a)); // Number
console.log(typeof (b)); // Number
console.log(typeof (c)); // String
console.log(typeof (d)); // Boolean
console.log(typeof (e)); // Boolean
console.log(typeof (j)); // undefined
console.log(typeof (k)); // object - Type of null - as per JS Specs

//* You can declare varibale with let and const

let f = "this is let variable"
const g = "this is const variable - you cannot reasign or change the value"


//? Var VS Let ----- IMP -----
//* Var is global scope and let is block scope

// let's take example for LET Keyword
//! {} this is block scope
let h = 6;
{
    console.log(h, "Now it's take global scope h")
}

{
    let h = 66;
    console.log(h, "Now it's take block scope h")
}

var i = 7;
{
    console.log(i, "now it's take global scope");
}

{
    var i = "Saurabh" // it's assign the new value to global scope
    console.log(i, "now it's take local scope");
}
console.log("After Executing above 2 block: ", i);


//! Object

let myObject = {
    name: "saurabh",
    "job designation": "Software Developer",
    is_handsome: true,
}
console.log("see how we declare key name is different ways", myObject);
//? How to access Specific value in object
//* objectName.keyName;
console.log("Check Saurabh is handsome or not? :", myObject.is_handsome);
//? How to add extra key value pair?
myObject.is_single = false;
console.log(myObject, "Object After Add key and value pair isSingle");
