// Events are actions or occurrences that happen in the browser which JavaScript 
// can detect and respond to.

// Events let JavaScript know that something happened.

// Common examples of events
// User clicks a button 🖱️
// User types in an input ⌨️
// Page finishes loading 🌐
// Mouse moves over an element
// Form is submitted
// Key is pressed

<button id="btn">Click me</button>
document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked!");
});

// "click" → event type
// addEventListener → attaches an event
// function → event handler