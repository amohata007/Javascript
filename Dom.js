// DOM manipulation in JavaScript means using JavaScript to access, change, add, or remove elements in a web page after it has loaded.

// The DOM (Document Object Model) is a tree-like representation of an HTML document.
// JavaScript interacts with the page through this DOM, not directly with the HTML file.

<p id="text">Hello</p>
// JavaScript sees this as an object it can control.

// 1. Selecting Elements
document.getElementById("text");
document.querySelector(".className");
document.querySelectorAll("p");

// 2. Changing Content
document.getElementById("text").textContent = "Hello World";

// 3. Changing Styles
document.getElementById("text").style.color = "red";

// 4. Adding / Removing Elements
const div = document.createElement("div");
div.textContent = "New Element";
document.body.appendChild(div);

// 5. Handling Events
button.addEventListener("click", () => {
  alert("Button clicked!");
});