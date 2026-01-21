
// Immutability means data cannot be changed after it is created.
// Instead of modifying existing data, you create a new copy with the changes.

// Immutable (cannot be changed)
// Primitive types:
// string
// number
// boolean
// null
// undefined
// symbol
// bigint

let str = "Hello";
str[0] = "h";   // ❌ no effect
str = "hello";  // ✅ new value

// Mutable (can be changed)

// Objects
// Arrays
// Functions

const user = { name: "Alex" };
user.name = "John"; // ✅ mutated

// Mutability is about whether the original array is changed in memory.
// Mutable method → modifies the same array
// Immutable method → returns a new array and leaves the original untouched

// Mutable methods change the same array in memory. Immutable methods create a new array.