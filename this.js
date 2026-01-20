// this refers to the object that is currently executing the code.(object)

const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Alice

//
function show() {
  console.log(this);
}

show(); // window (or undefined in strict mode)

// Arrow functions do not have their own this.
const user2 = {
  name: "Bob",
  greet: () => {
    console.log(this.name);
  }
};

user2.greet(); // undefined

const user3 = {
  name: "Bob",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

user3.greet(); // Bob