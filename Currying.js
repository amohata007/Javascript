
// Currying is a technique in JavaScript where a function with multiple 
// arguments is transformed into a sequence of functions, each taking a single argument.
function multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

console.log(multiply(2)(3)(4));

// Currying allows partial application:
const multiplyBy2 = multiply(2); // a = 2 fixed
const multiplyBy2And3 = multiplyBy2(3); // b = 3 fixed
console.log(multiplyBy2And3(4)); // 24

// Makes functions more modular and reusable.
// Libraries like Ramda or Lodash often use currying.