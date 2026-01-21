// ES6 stands for ECMAScript 2015.
// It’s a major update to JavaScript that introduced modern features making code cleaner, shorter, and more powerful.

//1. let and const

let age = 20;
const name = "Alex";


// (Block-scoped variables)

//2. Arrow Functions

const add = (a, b) => a + b;


//3. Template Literals

console.log(`Hello, ${name}`);


//4. Default Parameters

function greet(name = "Guest") {
  console.log(name);
}


//5. Destructuring

const user = { id: 1, role: "admin" };
const { role } = user;


//6. Spread & Rest Operator

const arr2 = [...arr1];
function sum(...nums) {}


//7. Classes

class Person {
  constructor(name) {
    this.name = name;
  }
}


// 8. Modules (import / export)

export default function greet() {}
import greet from "./greet.js";

// ES7 (ES2016)

Array.includes()

[1, 2, 3].includes(2); // true


// Exponentiation operator

2 ** 3; // 8

ES8 (ES2017)

async / await

async function getData() {
  const res = await fetch(url);
}


Object.entries() / Object.values()

Object.entries({ a: 1, b: 2 });

// Are Newer Versions Usable Today?

// ✅ Yes, modern browsers and Node.js support most ES features.
// For older browsers, tools like Babel convert modern JS into compatible code.