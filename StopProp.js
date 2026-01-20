// stopPropagation() is a method of the event object that prevents the event from traveling further through the DOM, either in bubbling or capturing phase.

<div id="parent" style="padding:20px; background:lightgreen;">
  Parent
  <button id="child">Click me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
    e.stopPropagation(); // stops bubbling
    console.log("Child clicked");
});
// Child clicked
// Parent handler does not run because bubbling is stopped.