// Memoization in JavaScript is an optimization technique where you cache the result of a function call so that the next time the same inputs occur, you return the cached result instead of recomputing it.

function fib(n) {//O(2 power n)
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
// fib(5)
//  ├─ fib(4)
//  │   ├─ fib(3)
//  │   │   ├─ fib(2)
//  │   │   │   ├─ fib(1) => 1
//  │   │   │   └─ fib(0) => 0
//  │   │   └─ fib(1) => 1
//  │   └─ fib(2)
//  │       ├─ fib(1) => 1
//  │       └─ fib(0) => 0
//  └─ fib(3)
//      ├─ fib(2)
//      │   ├─ fib(1) => 1
//      │   └─ fib(0) => 0
//      └─ fib(1) => 1
// fib(2), fib(3) are calculated multiple times
// Redundant calls → exponential time complexity O(2ⁿ)
// For fib(5), total 15 calls, many repeated


function fib(n, memo = {}) { //O(n)
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// Dry Run for fib(5):

// 1️⃣ Call fib(5, {})

// Not in memo → compute fib(4) + fib(3)

// 2️⃣ Call fib(4, {})

// Not in memo → compute fib(3) + fib(2)

// 3️⃣ Call fib(3, {})

// Not in memo → compute fib(2) + fib(1)

// 4️⃣ Call fib(2, {})

// Not in memo → compute fib(1) + fib(0)

// Base cases: fib(1)=1, fib(0)=0 → fib(2)=1

// Memo now: {2:1}

// 5️⃣ Back to fib(3) → fib(3)=fib(2)+fib(1)=1+1=2

// Memo now: {2:1, 3:2}

// 6️⃣ Back to fib(4) → fib(4)=fib(3)+fib(2)=2+1=3

// Memo now: {2:1,3:2,4:3}

// 7️⃣ Back to fib(5) → fib(5)=fib(4)+fib(3)=3+2=5

// Memo now: {2:1,3:2,4:3,5:5}

// Observations:

// Each Fibonacci number is calculated only once

// Subsequent calls check memo and return instantly

// Only n-1 calls → O(n) time complexity

// No redundant calculations
