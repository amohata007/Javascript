const nums = [1, 2, 3];

const result = nums.forEach(n => {
  return n * 2;
});

console.log(result);
//undefined
// forEach() ignores the return value of the callback

// It always returns undefined

const nums2 = [1, 2, 3];

const result2 = nums.map(n => {
  return n * 2;
});

console.log(result2);
//[2,4,6]
// map() collects returned values
// ✔ Returns a new array

// forEach is used for side effects — when you want to “do something” with each element, not create a new array.