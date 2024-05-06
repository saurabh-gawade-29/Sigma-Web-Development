let a = [1, "saurabh", true, 3.3];
console.log(a, "Array with multiple datatypes");

//! How to find length of array - using length property
let checkLength = a.length;
console.log(checkLength, "Length is property not function remember this");

//! Array is Mutable- i.e. you change actual array
a[3] = 4.4;
a[1] = "uday";
console.log(a, "check mutablity of array");

//! In Strings- immutable
let b = "Saurabh";
b[0] = "D";
console.log(b, "String is immutable");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let popele = arr.pop();
console.log(arr, "Remove last element");
console.log(popele, "Your Pop Element");

let pushele = arr.push(10);
console.log(arr, "Push Element at end of array");
console.log(pushele, "Your Push Element");

let shiftEle = arr.shift();
console.log(arr, "Remove first element");
console.log(shiftEle, "Your Shift Element");

let unshiftele = arr.unshift(1);
console.log(arr, "Push Element at start of array");
console.log(unshiftele, "Your unshift Element"); //! imp: here its return new length of an array

//* TOO Much IMP
let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let deleteItem = delete arrr[4];
console.log(deleteItem, "Delted Item"); //Return true
console.log(arrr, "Memory Allocation is still there");
//* Output: [ 1, 2, 3, 4, <1 empty item>, 6, 7, 8, 9, 10 ]
let checkLengthArrr = arrr.length;
console.log(checkLengthArrr, "length of your array");
let checkItem = arrr[4];
console.log(checkItem, "what is in that memory"); //!undefined

//! Concat Arrays
let a1 = [1, 2];
let a2 = [3, 4];
let a3 = a1.concat(a2); //* array.concat(arr1,arr2,arr3);
console.log(a3, "concat both arrays");

let numbers = [1, 2, 3, 4, 5];
//! I Want to delete 2 element in actual array from index 1
numbers.splice(1, 2); //(1="start index",2="How much element remove")
console.log(numbers);

let numbers1 = [1, 4, 5];
numbers1.splice(1, 0, 2, 3); //(1=index, 0=no of element delete, 2, 3 = add element)
console.log(numbers1, "Spice");

// he constructor property returns the function that created the Array prototype:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;
console.log(text, "what is native code"); //Return Function

//* Built in method
fruits.includes("Mango"); // Return boolean
let index = fruits.indexOf("Apple"); //2

//! Important:
let friends = ["saurabh", "prasad", "uday"];
let myName = "Saurabh";
let result = Array.isArray(friends);
let result1 = Array.isArray(myName);
console.log(result, result1, "check isArray");

//! Join is important
let allFriend = friends.join(" and ");
console.log(allFriend, "added and for every comma");

const myArr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr1 = myArr1.flat();

const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr2 = myArr2.flat(2);
console.log(newArr1, "nested array to single array");
console.log(newArr2, "nested array to single array but you have to put(level)");
//! otherwise it will give you an error

//! arr.toString()
let arrtoString = [1, 2, 3, 4, 5];
let checkarrtostring = arrtoString.toString();
console.log(checkarrtostring, "Array to string conversion: type is", typeof checkarrtostring);

