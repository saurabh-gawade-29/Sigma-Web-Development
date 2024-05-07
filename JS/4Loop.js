//! For Loop
/* 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
//* Example:
let a = 1;
//! The For Loop
for (let i = 0; i < 10; i++) {
    console.log(a + i);
}

//!For in - Syntax
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }
// }
//* Example:
let obj = {
    name: "Saurabh",
    role: "Programmer",
    salary: "jisme Ghar chal Jaye"
}
for (const key in obj) {
    console.log("key is", key);
    const element = obj[key];
    console.log("Value is:" + element);
}


//! for Of Loop
// for (const iterator of object) {
// }

//* For of Loop - deal with string or array
let myname = "Saurabh";
let fruit = ["apple", "banana", "kiwi", "strawberry"];
for (const iterator of fruit) {
    console.log(iterator);
}

//! While Loop
let j = 0;
while (j < 10) {
    let k = 1;
    console.log(k + j);
    j++;
}

//! Do-While Loop
// do {
// } while (condition);

//* Example
let l = 9000;
do {
    console.log(l, "it's run if the while condition is trur or false");
    l++;
} while (l < 6);

