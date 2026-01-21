// Debounce is a technique used to limit how often a function is executed.
// It ensures that a function runs only after a certain amount of time has passed since the last event.

// 👉 Commonly used for search inputs, window resize, button clicks.
// If you keep typing → it keeps cancelling
// When you stop typing → it finally runs
<input type="text" id="search" placeholder="Type to search..." />

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function handleSearch(value) {
  console.log("Searching for:", value);
}

const debouncedSearch = debounce(handleSearch, 500);

document.getElementById("search").addEventListener("input", function (e) {
  debouncedSearch(e.target.value);
});



/*
Why return function (...args) ?
Simple answer:

Because we don’t want to run fn immediately.
We want to control when it runs.

So instead of returning the result, we return a new function that:

waits

cancels old calls

runs fn later

Why ...args?

...args means:
👉 “catch whatever values are passed when this function is called”

Example:

debouncedSearch("hello");


Inside debounce:

args = ["hello"];


So:

...args makes debounce work with any number of arguments

Why use clearTimeout(timer)?

Simple:

If user types again → cancel the previous timer

This prevents multiple executions

“Only the last call should run”

Why use setTimeout?

It delays execution

If no new calls happen within delay, function finally runs

Why use fn.apply(this, args)?
VERY IMPORTANT PART 👇

We want:

Same this

Same arguments

Same behavior as original function

What apply does:
fn.apply(this, args);


Means:

“Call fn using the same this and pass all arguments”

What are this and args here?
this

Refers to where the function was called from

Example: input element, object, etc.

Keeps the original context

args

Values passed to the debounced function

Example:

debouncedSearch("apple");


args = ["apple"]

Why not just call fn(args)?

❌ Wrong:

fn(args);


Sends array instead of values

Loses this context

✅ Correct:

fn.apply(this, args);

Is call, apply, and bind the same?
NO — but related
Method	Difference
call	Calls function immediately, args separately
apply	Calls function immediately, args as array
bind	Returns a new function (does NOT call)
Example:
fn.call(this, a, b);
fn.apply(this, [a, b]);

Why apply here?

Because we already have arguments as an array (args).

Why not use bind?

bind returns a new function and does NOT execute it.
Here, we want to execute after delay, not create another function.

One-line interview explanation

“We use ...args to accept any arguments, apply to preserve this and arguments, and return a function to control when the original function executes.”
*/

function demo(...args) {
  console.log(args);
}

demo("hello");        // ["hello"]
demo("a", "b", "c");  // ["a", "b", "c"]