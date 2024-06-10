// Array.prototype = function () {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }

// var numberArray = [7, 4, 5, 9]

// console.log(numberArray.sum())

Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

var numberArray = [7, 4, 5, 9];
console.log(numberArray.sum()); // Output: 25

/*
There are a few issues with your JavaScript code. The primary problem is the way you are trying to add a method to the `Array.prototype`. Here's the corrected code with proper implementation:

1. Add a method to `Array.prototype`.
2. Access the `this` keyword to refer to the array inside the method.

Here is the corrected code:

```javascript
Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

var numberArray = [7, 4, 5, 9];
console.log(numberArray.sum()); // Output: 25
```

### Explanation

- `Array.prototype.sum = function () { ... }`: This line correctly defines a method `sum` on the `Array.prototype`, which makes it available to all array instances.
- Inside the `sum` method, `this` refers to the array on which the method is called.
- The `for` loop iterates over each element in the array and accumulates the sum.
- Finally, the `sum` is returned.

With this correction, calling `numberArray.sum()` will correctly output the sum of the elements in the array.

*/