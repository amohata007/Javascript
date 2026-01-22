// In web development, localStorage, sessionStorage, and cookies are ways to store data on the client—
// but they differ a lot in lifetime, scope, security, and use cases.

// 1. localStorage
// Browser storage for key–value pairs
// Data persists even after browser restart
// Size: ~5–10 MB
// Shared across all tabs of the same origin
// Accessible via JavaScript
// Never expires automatically

localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

// Pros

// ✔ Persistent
// ✔ Simple API

// Cons ⚠️

// ❌ Vulnerable to XSS
// ❌ Not secure for tokens or secrets


// 2. sessionStorage
// Storage tied to a single tab/session
// Cleared when tab is closed
// Size: ~5 MB
// Not shared across tabs
// Accessible via JavaScript

sessionStorage.setItem("step", "2");

// Pros
// ✔ Isolated per tab
// ✔ Auto-cleared

// Cons ⚠️

// ❌ Vulnerable to XSS
// ❌ Not for sensitive data


// 3. Cookies 🍪
// Small pieces of data sent with every HTTP request
// Size: ~4 KB
// Can have expiration
// Can be made secure

// Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict

// cookies can be c
// reated by both JavaScript and Node.js, but how and why they’re created is very different.

// ✅ JavaScript (browser)

document.cookie = "theme=dark";


// ✔ Created in the browser
// ❌ Cannot set HttpOnly
// ❌ Not secure for auth

// ✅ Node.js / Backend (recommended)

// Using HTTP response headers:

// Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict


// ✔ Secure
// ✔ Best for authentication
// ✔ Industry standard