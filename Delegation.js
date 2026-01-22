// Event Delegation is a JavaScript technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements, and handle events using event bubbling.

// So instead of:
button.addEventListener("click", handler);

// We do:
parent.addEventListener("click", handler);

// ❌ Without Event Delegation
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    console.log(li.textContent);
  });
});

//With Delegation-> Parent "ul"
document.querySelector("ul").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
