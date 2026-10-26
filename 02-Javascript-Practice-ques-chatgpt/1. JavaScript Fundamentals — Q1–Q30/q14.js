// Q14 🟢 `Infinity` kab milta hai?

// ANS Infinity 🔷

// Kab milta hai?

1 / 0          // Infinity  ← kuch bhi divide by zero
-1 / 0         // -Infinity ← negative version
Math.pow(2, 10000) // Infinity ← bohot bada number

// ⚠️ Interesting Cases

typeof Infinity        // "number" ← number hi hai
isFinite(Infinity)     // false
isFinite(42)           // true ✅

Infinity + 1           // Infinity ← kuch nahi badla
Infinity - Infinity    // NaN ← undefined ho gaya

//  🎯 Memory Rule

/* Infinity  → koi bhi number / 0
-Infinity → negative number / 0
Check karo → isFinite() se
typeof Infinity = "number" */