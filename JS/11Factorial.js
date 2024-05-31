//! Basic For Loop
let a = 6;
function factorialOut(number) {
  debugger;
  if (number <= 0 || "number" !== typeof number) {
    console.log("Please Enter Valid Number");
  } else {
    let arr = Array.from(Array(number + 1).keys());
    console.log(arr, "Actual Array");
    let newArr = arr.slice(1);
    console.log(newArr, "Sliced Array");
    let ans = newArr.reduce((a, b) => a * b);
    console.log(`Factorial of ${number}:`, ans)
  }
}

factorialOut(a);
