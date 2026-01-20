// 1️⃣ slice() – Does NOT change original array
// slice() is used to copy a portion of an array and return a new array.

let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 4);
console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)
// Use cases
// Copy part of an array
// Create shallow copy of array


// 2️⃣ splice() – CHANGES the original array
// splice() is used to add, remove, or replace elements in an array.
// array.splice(startIndex, deleteCount, item1, item2, ...)

let arr2 = [1, 2, 3, 4, 5];
let removed = arr2.splice(1, 2); //2 is number of elements to remove
console.log(removed); // [2, 3]
console.log(arr2);     // [1, 4, 5]

let arr3 = [1, 2, 5];
arr3.splice(2, 0, 3, 4);
console.log(arr3); // [1, 2, 3, 4, 5]