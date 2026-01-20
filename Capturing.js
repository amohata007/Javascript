// 2️⃣ Event Capturing (Top → Bottom)

// Definition:

// Event starts at the top of the DOM (document) and travels down to the target element.

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked (capture)");
}, true); // true = capturing phase

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked (capture)");
}, true);