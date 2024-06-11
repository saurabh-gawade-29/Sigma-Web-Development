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
console.log(firstElementChildInnerElement);
firstElementChildInnerElement.style.backgroundColor = 'red';
firstElementChildInnerElement.style.color = 'Yellow';

//! How to find inner Child   --- index.html Comment code justify here
let innerChildContainer = document.body.firstElementChild.childNodes;
console.log(innerChildContainer);

//! How to find Parent Element?
let parentElement = document.body.firstElementChild.firstElementChild.parentElement;
console.log(parentElement);

//! you want only child element (children)
let allChildren = document.body.children;
let allChildren0 = document.body.children[0];
let allChildren1 = document.body.children[1];
let allChildrenChild = document.body.childNodes[1].children;
console.log(allChildren);
console.log(allChildren0);
console.log(allChildren1);
console.log(allChildrenChild);


//! Next Element Sibling
let nextElementSibling = document.body.childNodes[0].nextElementSibling;
console.log(nextElementSibling)