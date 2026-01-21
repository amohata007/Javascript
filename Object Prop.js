// Method	What it does	Example
// Object.keys(obj)	Returns array of keys	{a:1,b:2} → ["a","b"]
// Object.values(obj)	Returns array of values	{a:1,b:2} → [1,2]
// Object.entries(obj)	Returns array of [key,value] pairs	{a:1,b:2} → [["a",1],["b",2]]
// Object.assign()	Copies properties from one object to another	Object.assign({}, {a:1}) → {a:1}
// hasOwnProperty()	Checks if key exists	obj.hasOwnProperty("a") → true
// Object.freeze()	Makes object immutable	Object.freeze(obj)
// Object.seal()	Prevent adding/removing keys	Object.seal(obj)
// delete obj.key	Deletes a key	delete obj.a
// in operator	Checks if key exists	"a" in obj → true

const users = [
  {name: "Alice", role: "admin"},
  {name: "Bob", role: "user"},
  {name: "Charlie", role: "admin"},
  {name: "David", role: "user"},
];
// Group users by their "role" property
const grouped = Object.groupBy(users, user => user.role);

console.log(grouped);

// {
//   admin: [
//     {name: "Alice", role: "admin"},
//     {name: "Charlie", role: "admin"}
//   ],
//   user: [
//     {name: "Bob", role: "user"},
//     {name: "David", role: "user"}
//   ]
// }

const grouped2 = users.reduce((acc, user) => {
  const key = user.role;      // group key
  if (!acc[key]) acc[key] = []; // initialize array if not exists
  acc[key].push(user);        // add user to the correct group
  return acc;
}, {}); // initial value: empty object

console.log(grouped2);