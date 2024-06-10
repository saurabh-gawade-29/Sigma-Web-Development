//! Output: Error: coz let and const in Block Scope  
//* and if you print z => undefined
{
    const y = 100;
    var z;
    let x;
}
// console.log(x, y, z)


//! Var is in Function Scope
function k() {
    var a = 100;
}
k();
console.log(a);