try {
  console.log("Start");
  throw new Error("Something went wrong");
} catch (err) {
  console.log("Caught:", err.message);
} finally {
  console.log("Always runs");
}

// finally is used to execute cleanup code that must run regardless of success or failure.
//Always runs
// 2️⃣ Stop Loaders / Spinners (UI)
showLoader();
try {
  await fetchData();
} catch (e) {
  showError();
} finally {
  hideLoader(); // always hides
}
// Prevents stuck loaders