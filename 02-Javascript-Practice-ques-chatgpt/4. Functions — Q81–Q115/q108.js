// Q108 🟡 Pure function aur impure function ke examples do.

// --- 1. PURE FUNCTION ---
// Sirf apne parameters (price, tax) par depend hai, bahar kuch change nahi karta
const calculateTotal = (price, tax) => price + tax;

console.log(calculateTotal(100, 18)); // Output: 118
console.log(calculateTotal(100, 18)); // Output: 118 (Always same)


// --- 2. IMPURE FUNCTION ---
// Bahar ke variable (count) ko change kar raha hai (Side Effect)
let count = 0;

const increment = () => {
  count++; // Bahar ki value badal di
  return count;
};

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2 (Same call, par output badal gaya!)