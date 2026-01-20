console.log(a); //undefined
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20;

// Hoisting is JavaScript's default behavior of moving declarations (variables and functions) 
// to the top of their scope before execution.
// Only declarations are hoisted, not initializations.
// Scope matters:
// Global scope → variables/functions declared anywhere in a script
// Function scope → inside a function
// Block scope → let and const are block-scoped
// let and const are hoisted, but they are in the temporal dead zone (TDZ) until the declaration line executes.
// Accessing them before declaration → ReferenceError

greet(); // Hello!

function greet() {
    console.log("Hello!");
}

// You don’t “call” hoisting; it’s a behavior of the JS engine.

// Whenever your JS code runs, the engine moves variable and function declarations to the top of their scope before executing the code.

// This allows function declarations to be called before they appear in code.