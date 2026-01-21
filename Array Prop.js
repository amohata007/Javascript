// Common Array Methods
// Method	What it does	Example
// push()	Add item at the end	[1,2].push(3) → [1,2,3]
// pop()	Remove last item	[1,2,3].pop() → [1,2]
// shift()	Remove first item	[1,2,3].shift() → [2,3]
// unshift()	Add item at beginning	[1,2].unshift(0) → [0,1,2]
// map()	Returns new array by transforming each element	[1,2,3].map(x=>x*2) → [2,4,6]
// filter()	Returns new array with elements that pass a test	[1,2,3].filter(x=>x>1) → [2,3]
// reduce()	Reduces array to a single value	[1,2,3].reduce((a,b)=>a+b) → 6
// forEach()	Iterates over elements (no return)	[1,2,3].forEach(x=>console.log(x))
// find()	Finds first element matching condition	[1,2,3].find(x=>x>1) → 2
// includes()	Checks if element exists	[1,2,3].includes(2) → true
// slice()	Returns part of array	[1,2,3].slice(0,2) → [1,2]
// splice()	Add/remove items in place	arr.splice(1,1) → removes index 1
// sort()	Sorts array	[3,1,2].sort() → [1,2,3]
// concat()	Combines arrays	[1,2].concat([3,4]) → [1,2,3,4]