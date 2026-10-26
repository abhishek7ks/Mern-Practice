// Q13 🟢 `Number.isNaN()` aur global `isNaN()` ka difference test karo.                                                                                                                                                                                                                                                                                                                

// Difference:

// Global isNaN() → pehle convert karta hai, phir check
isNaN("hello")     // true  ← "hello" → NaN → true
isNaN("42")        // false ← "42" → 42 → false
isNaN(undefined)   // true  ← undefined → NaN → true

// Number.isNaN() → sirf actual NaN check karta hai
Number.isNaN("hello")    // false ← string hai, NaN nahi
Number.isNaN("42")       // false ← string hai, NaN nahi
Number.isNaN(undefined)  // false ← undefined hai, NaN nahi
Number.isNaN(NaN)        // true  ← actual NaN hai ✅

// 🎯 Memory Rule
/*
isNaN()         → convert karta hai pehle → unreliable ⚠️
Number.isNaN()  → sirf actual NaN → reliable ✅

Production mein hamesha Number.isNaN() use karo! */

