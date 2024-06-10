//! you will get array of all child Node
let nodes = document.body.childNodes;
console.log(nodes);

let singleNode = document.body.childNodes[0];
console.log(singleNode);

let singleNodeSecond = document.body.childNodes[1];
console.log(singleNodeSecond);

//! How to Remove Text ?
let firstElementChildNode = document.body.firstElementChild;
console.log(firstElementChildNode);

let lastElementChildNode = document.body.lastElementChild;
console.log(lastElementChildNode);
//* IMP: Script is valid element

//! How to Change css property using above methods;
let firstElementChildInnerElement = firstElementChildNode.firstElementChild;
console.log(firstElementChildInnerElement)
firstElementChildInnerElement.style.backgroundColor = 'red';
firstElementChildInnerElement.style.color = 'Yellow';