<div style="height:2000px;">
  Scroll down to see throttle in action!
</div>

// Throttle function
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Function to run on scroll
function handleScroll() {
  console.log("Scroll position:", window.scrollY);
}

// Throttled scroll handler (runs at most once every 500ms)
const throttledScroll = throttle(handleScroll, 500);

window.addEventListener("scroll", throttledScroll);

// handleScroll runs at most once every 500ms, even if the user scrolls continuously.
// // Prevents performance issues caused by too many scroll events.

//Second Example
<button id="buy">Buy Now</button>

// Throttle function
function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// Function to run on click
function handleBuy() {
  console.log("Item bought at:", new Date().toLocaleTimeString());
}

// Throttle: runs at most once every 2 seconds
const throttledBuy = throttle(handleBuy, 2000);

// Add click listener
document.getElementById("buy").addEventListener("click", throttledBuy);
// How it works
// User clicks the button → calls throttledBuy

// throttledBuy checks if 2 seconds have passed since the last call

// ✅ If yes → executes handleBuy()

// ❌ If no → ignores the click

// Even if user clicks 10 times quickly, handleBuy runs at most once every 2 seconds

// Why this is useful
// Prevents multiple accidental purchases

// Avoids flooding the server with too many API calls