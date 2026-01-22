// JavaScript security issues usually happen because JavaScript runs in the browser, 
// interacts with user input, and often talks to servers.
//  If inputs, permissions, or data handling are not controlled, attackers can exploit them.

// 1. Cross-Site Scripting (XSS) ⚠️

// Attacker injects malicious JS into a page
// Code runs in other users’ browsers

Example
element.innerHTML = userInput; // dangerous

// Impact
// Steal cookies
// Hijack sessions
// Redirect users



// 2. Cross-Site Request Forgery (CSRF)
// User is tricked into sending a request they didn’t intend
Impact
// Unauthorized actions (change password, transfer money)



// 3. Insecure Authentication
// Tokens stored in localStorage
// Weak JWT handling
// No token expiration


// 4. Prototype Pollution
// Attacker modifies JavaScript object prototypes

// App logic manipulation
// Potential RCE in Node.js apps

// 5. Exposed Secrets

// API keys in frontend code
// Hardcoded credentials



// 3. How to prevent JavaScript security issues
// 1. Never trust user input
// ✅ Validate
// ✅ Sanitize
// ✅ Escape
// // Safe
// element.textContent = userInput;

// // Avoid
// element.innerHTML = userInput;


// 2. Prevent XSS
// ✔ Use frameworks (React, Vue) that auto-escape
// ✔ Use Content Security Policy (CSP)
// ✔ Encode output properly
// Content-Security-Policy: default-src 'self'


// 3. Secure cookies
// Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict



// HttpOnly → JS can’t read it


// Secure → HTTPS only


// SameSite → CSRF protection



// 4. Protect against CSRF
// ✔ Use CSRF tokens
// ✔ SameSite cookies
// ✔ Verify origin headers

// 5. Do NOT rely on frontend security


// Always validate on the server


// Re-check permissions server-side



// 6. Secure API usage
// ✔ Rate limiting
// ✔ Authentication & authorization
// ✔ Input validation

// 7. Handle dependencies safely
// ✔ Use npm audit
// ✔ Keep libraries updated
// ✔ Remove unused packages

// 8. Store secrets safely
// ❌ Frontend JS
// ✔ Backend environment variables
// ✔ Secret managers

// 4. Browser vs Node.js security
// Browser JavaScript


// XSS


// CSRF


// Clickjacking


// CORS misconfigurations


// Node.js JavaScript


// Command injection


// Path traversal


// Prototype pollution


// Insecure deserialization



// 5. Security mindset (important)
// 🔒 Assume attackers control:


// The browser


// The network


// The input


// 🛡 Trust only:


// Server-side checks


// Well-defined security boundaries
