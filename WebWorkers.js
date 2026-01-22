// Web Workers in JavaScript are a way to run scripts in background threads separate from the main execution thread. This allows you to perform heavy computations without freezing the UI.

// Why we need Web Workers

// JavaScript runs in a single thread (UI + JS code together)

// Heavy tasks (loops, calculations, data processing) block the UI

// Web Workers allow parallel execution without freezing the page

// worker.js
self.onmessage = function(e) {
  const result = e.data * 2; // simple computation
  self.postMessage(result);
};

// main.js
const worker = new Worker('worker.js');

// Listen for messages from worker
worker.onmessage = function(e) {
  console.log('Result from worker:', e.data);
};

// Send data to worker
worker.postMessage(10);


// Result from worker: 20