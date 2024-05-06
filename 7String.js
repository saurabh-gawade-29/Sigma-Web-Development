//! String -> Store And Manipulate String
let a = "Saurabh";
console.log(a);

//! In String you can access each letter using index
let b = a[0];
console.log(b);

//TODO: Why Negative index is not possible
let c = a[-1];
console.log(c); // undefined

/*
In JavaScript, negative indexing is not directly supported for accessing elements in arrays or strings like in some other programming languages such as Python.
In Python, negative indexing allows you to access elements from the end of the array or string, with -1 representing the last element, -2 representing the second last, and so on.
Hwever, in JavaScript, negative indexing is not part of the language specification. You'll need to use positive indices or calculate the positive index equivalent of the negative index manually.
*/

// TODO: SAURABH -> Last index: 6
//! If try to access the 7th index item which is not present here
let d = a[7];
console.log(d); // undefined

//! String Litral:
let naame = "saurabh";
let friend = "uday";
let sentence = `My name is ${naame} and my friend is ${friend}`;
console.log(sentence);
//TODO:`{name}` Which is string interpolation

//! Escape Sequence
// let myName = "Saur"abh"; //! this will give you error
let myName = 'Saur"abh'; //! Use Forword Slash here \" => "
let myNameStringLitral = `Saura"bh`; //TODO: Using string litral we can solve this issue

//! Function vs Property
let myFriend = "Saurabh";
let myFriendUpper = myFriend.toUpperCase();
let myFriendLower = myFriend.toLocaleLowerCase();
let myFriendProp = myFriend.length;
console.log(myFriendUpper, myFriendLower, myFriendProp);
/*
e.g.
Property: door; Possible Values: open, closed
Method: openDoor; Action: to change the value of the door property to "open"
*/

//! Slicing - Indexing Start with 0
let _slice = myFriend.slice(1, 5);
console.log(_slice);

let _slice_ = myFriend.slice(1);
console.log(_slice_, "it will take end index as last index");

//! Replace
let _replace = myFriend.replace("bh", "v");
console.log(_replace);

//TODO: Check for multiple occurances
let example = "NAYANA"; //* Here is NA appear two times
let _multipleReplace = example.replace("NA", "RA");
console.log(_multipleReplace); //? output: RAYANA
//! Replace only works for 1st occurance

//! Concatination
let firstWord = "Saurabh";
let secondWord = "Uday";
let _concat = firstWord + secondWord;
console.log(_concat, "using concatination operator");
//! Method-Concat
let _concatMethod = firstWord.concat(secondWord);
console.log(_concatMethod, "Using Built In Method");
//! We Can Concat mutiple words using this method
let _concatMultipleWord = firstWord.concat(secondWord, "prasad", "Shubham");
console.log(_concatMultipleWord);

//! String are immutable- i.e. you cannot change original string