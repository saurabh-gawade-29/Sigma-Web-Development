//! MAP
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = arr.map((element) => element ** 2);
console.log(newArr);

//! Filter
function greaterThanFive(e) {
  if (e > 5) {
    return true;
  }
  return false;
}
let newFilterArr = arr.filter(greaterThanFive);
let newFilterArrShort = arr.filter((e)=> e > 5 ? true : false );
console.log(newFilterArr);
console.log(newFilterArrShort);
