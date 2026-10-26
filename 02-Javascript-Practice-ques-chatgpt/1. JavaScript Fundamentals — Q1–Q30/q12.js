// Q12 🟢 `NaN` kya hai? Example se show karo.

// NaN — Not a Number 🔷

/* 
Kya hota hai?

Jab number operation fail ho jaye — result NaN aata hai 
*/

console.log(Number("hello"));    // NaN ← string number nahi bani
console.log("abc" - 5);          // NaN ← string minus number
console.log(0 / 0);              // NaN ← undefined math
console.log(parseInt("xyz"));    // NaN ← convert nahi hua

// ⚠️ Interesting Cheez

console.log(typeof NaN)  // "number" 😅
// NaN hai toh "Not a Number" par type "number" hai — JS ki aur ek quirk!

console.log(NaN === NaN) // false 😱
// NaN khud se bhi equal nahi hota!

// ✅ NaN Check Kaise Karo?

isNaN("hello")     // true  ✅
isNaN(42)          // false ✅
Number.isNaN(NaN)  // true  ✅ (best way)

// 🎯 Memory Rule
/*
NaN = koi bhi failed number operation
typeof NaN = "number"  → JS ki quirk
NaN === NaN = false    → JS ki quirk
Check karo → Number.isNaN() se */