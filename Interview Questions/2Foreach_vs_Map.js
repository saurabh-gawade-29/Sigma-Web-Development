let arr = [1,2,3,4,5];

let newMapArray = arr.map((element)=>{
    return element + 1;
} )

console.log(arr, "Existing array as it is");
console.log(newMapArray, "This is new Array");

//! You cannot store into newArray
// let arrrNewForEach = arrr.forEach(element => {
//     return element + 1;
// });

let arrr = [1, 2, 3, 4, 5, 6];
arrr.forEach((element) => {
  arrr = element + 1;
});

console.log(arrr, "Existing array as it is");
// console.log(arrrNewForEach, "This is new Array");