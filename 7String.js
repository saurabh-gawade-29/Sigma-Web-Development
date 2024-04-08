//! String -> Store And Manipulate String
let a = "Saurabh";
console.log(a);

//! In String you can access each letter using index
let b = a[0];
console.log(b);

//! Why Negative index is not possible
let c = a[-1];
console.log(c); //undefined

/*
    In JavaScript, negative indexing is not directly supported for accessing elements in arrays or strings like in some other programming languages such as Python.
    In Python, negative indexing allows you to access elements from the end of the array or string, with -1 representing the last element, -2 representing the second last, and so on.
    Hwever, in JavaScript, negative indexing is not part of the language specification. You'll need to use positive indices or calculate the positive index equivalent of the negative index manually.
*/
