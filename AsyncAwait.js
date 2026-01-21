// Async / Await (with example)

// async / await is a modern JavaScript feature that makes asynchronous code look and behave like synchronous code, making it easier to read and write.
// async is used before a function to make it return a Promise
// await pauses the execution of the function until the Promise is resolved or rejected

async function getMessage() {
  const message = await new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello, Async/Await!");
    }, 1000);
  });

  console.log(message);
}

getMessage();
// Async/Await is just a cleaner and more readable way to use Promises.