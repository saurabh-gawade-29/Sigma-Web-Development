let a = "abcdef";
let findLength = a.length;
console.log(findLength, "the length is: ");
let newarr = [];
if (findLength % 2 === 0) {
  let arr = a.split("");
  for (let i = 0; i < arr.length; i = i + 2) {
    let b = arr[i] + arr[i + 1];
    console.log(b);
    newarr.push(b);
  }
  console.log(newarr, "array");
  console.log("even");
} else {
  let arr = a.split("");
  let arrr = arr.push("_");
  console.log(arrr, "arrrr");
  for (let i = 0; i < arr.length; i = i + 2) {
    let b = arr[i] + arr[i + 1];
    console.log(b);
    newarr.push(b);
  }
  console.log(newarr, "array");
  console.log("odd");
}
