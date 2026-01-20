//Arrow functions are a shorter syntax for writing functions and 
// they behave differently from normal functions in a few important ways.

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};
const add = (a, b) => a + b;

// With {}, you must use return:

const multiply = (a, b) => {
  return a * b;
};

// Arrow Functions and this 🚨 (Key Difference)

// Arrow functions do NOT have their own this.
// They take this from their surrounding scope.
// Perfect for map, filter, setTimeout, etc.

// Arrow Functions Cannot Be Used As Constructors ❌
const Person = (name) => {
  this.name = name;
};

const p = new Person("Bob"); // ❌ Error

// Arrow Functions Have No arguments Object
const test = () => {
  console.log(arguments);
};

test(1, 2); // ❌ Error


// Use rest parameters instead:

const test2 = (...args) => {
  console.log(args);
};

test2(1, 2); // [1, 2]

//normal function
// function showArgs() {
//   console.log(arguments);
// }

// showArgs(10, 20, 30);
// Output:

// csharp
// Copy code
// [10, 20, 30]