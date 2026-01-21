// 1️⃣ Shallow Copy

// A shallow copy copies only the first level of an object/array.
// Primitive values → copied by value ✅
// Nested objects/arrays → copied by reference ❌

// 2️⃣ Deep Copy
// A deep copy copies all levels, including nested objects.
// Changes in the copy do not affect the original.

const user = {
  name: "Alex",
  address: { city: "NY" }
};
const shallowCopy = { ...user };

shallowCopy.name = "John";
shallowCopy.address.city = "LA";

console.log(user.name);          // Alex ✅
console.log(user.address.city);  // LA ❌ (changed!)

const deepCopy = structuredClone(user);
deepCopy.address.city = "Paris";
console.log(user.address.city); // NY ✅

// Ways to Create Shallow Copies
// Objects
const copy = { ...obj };
Object.assign({}, obj);

// Arrays
const copy2 = [...arr];
arr.slice();

// Ways to Create Deep Copies
// 1. structuredClone() (Best Modern Way ✅)
const deep = structuredClone(obj);

// 2->
const deep2 = JSON.parse(JSON.stringify(obj));