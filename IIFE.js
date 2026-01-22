const Module = (function() {
  // Private variables and functions
  let count = 0;

  function privateFunction() {
    console.log("I am private");
  }

  // Public API
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    reset: function() {
      count = 0;
      console.log("Reset");
    }
  };
})();

Module.increment(); // 1
Module.increment(); // 2
Module.reset();     // Reset

Module.count;       // undefined (private)
Module.privateFunction(); // Error (private)
