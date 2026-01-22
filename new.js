// The new keyword is used to create an instance of a constructor. It creates a new object, links it to the constructor’s prototype, binds this to that object, and returns it.

// When we use new:

// A new empty object is created

// The object’s [[Prototype]] is set to the constructor’s prototype

// The constructor function is executed with this bound to the new object

// The new object is returned (unless the constructor returns another object)

function Person(name) {
  this.name = name;
}

const p = new Person("Alice");
// Here, p is linked to Person.prototype, so it can access prototype methods.

// : What happens if you forget new?

// this becomes window in non-strict mode, or undefined in strict mode, causing bugs.

// Q: Can arrow functions be used with new?

// No, arrow functions don’t have a prototype and cannot be used as constructors.

// : Is class different from new?

// No. class is syntactic sugar; it still uses new and prototypes internally.

