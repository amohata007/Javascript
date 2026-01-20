// Event Bubbling

// Definition: Event starts at the target element and bubbles up to its ancestors.

// Direction: Child → Parent → Grandparent → … → document

// Default: Most events in JavaScript bubble by default.

<div id="grandparent" style="padding:20px; background:lightblue;">
  Grandparent
  <div id="parent" style="padding:20px; background:lightgreen;">
    Parent
    <div id="child" style="padding:20px; background:lightpink;">Child</div>
  </div>
</div>

// Bubbling phase (default)
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked (bubble)");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked (bubble)");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked (bubble)");
});
