// Strict mode in JavaScript is a way to make your code run with stricter rules, helping you write safer, cleaner, and less error-prone code.

"use strict"; // whole file

function test() {
  "use strict"; // only inside this function
}

x = 10; // ❌ Error in strict mode
let x = 10;

function test() {
  console.log(this); // window
}
test();

"use strict";
function test() {
  console.log(this); // undefined
}
test();

function sum(a, a) {} // ❌ Error

// Reserved words are protected
let public = 10; // ❌ Error


// Q1: Does strict mode improve performance?

// ➡️ Sometimes, because engines can optimize better.

// Q2: Can you disable strict mode?

// ➡️ No, once enabled for a scope.

// Q3: Is "use strict" required today?

// ➡️ Not if you use ES modules or modern frameworks.