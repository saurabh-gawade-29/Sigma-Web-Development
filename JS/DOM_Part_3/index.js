//! If you want all the element which have classname box
let boxes = document.getElementsByClassName('box');
console.log(boxes);

//! If i want to change the color,bg color of second box using classname
//! for below Test Case i will write box name as saurabh
boxes[1].style.color = 'red';
boxes[1].style.backgroundColor = "Yellow";

//! but here is issue if i add multiple box at second position then saurabh position will change
//! So just put id there to target that element - only 
//! Id Always Unique
let boxesWithId = document.getElementById('name');
console.log(boxesWithId);
boxesWithId.style.color = "white";
boxesWithId.style.backgroundColor = "purple";

//! QuerySelector - it will return first element who has className=> .box
/* IMP NOTE:
let boxes = document.getElementsByClassName('box');  ==> box without "."
see the diff
let boxClassName = document.querySelector('.box'); ==> box without "."
*/
let boxClassName = document.querySelector('.box');
console.log(boxClassName)

//! Now change the background Color
boxClassName.style.backgroundColor = 'green';


//! In Above Method there one issue it will return only one element
/*
    But As we know there are multiple element with same className
    ******* how we Solve?  Ans: document.querySelectorAll() **************
*/
let allQuerySelectorElement = document.querySelectorAll('.newBox');
console.log(allQuerySelectorElement);

//And i want to change Color of three element
/*
o/p
NodeList(3) [div.newBox, div.newBox, div.newBox]

so this is array and array does not have style property
use For Loop, ForEach Loop, Etc for access property of object
we use forEach
*/

allQuerySelectorElement.forEach((element) => {
    element.style.backgroundColor = '#3f3f3f'
})

