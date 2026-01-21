// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation and provides a way to handle its result in the future.
// A Promise can be in one of three states:
// Pending – initial state, not completed yet
// Fulfilled – operation completed successfully
// Rejected – operation failed

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then(result => {
    console.log(result); // Operation successful!
  })
  .catch(error => {
    console.log(error);
  });
