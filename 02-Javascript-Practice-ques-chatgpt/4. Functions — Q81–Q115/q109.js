// ==========================================
// Q109: Side Effect in JavaScript (Notes)
// ==========================================

/* 
  DEF: Jab koi function apna main kaam (return) karne ke alawa 
  apne bahar ki duniya (global variables ya data) mein koi badlav 
  kar deta hai, toh use Side Effect kehte hain.
*/

const originalPrices = [100, 200, 300];

// ❌ 1. WITH Side Effect (Impure): Bahar ke array ko mutate (badal) raha hai
const addItemWithSideEffect = (arr, newPrice) => {
  arr.push(newPrice); // ⚠️ Side Effect: Asli array kharab ho gaya
  return arr;
};

// ✅ 2. WITHOUT Side Effect (Pure): Asli array ko haath nahi lagata
const addItemPure = (arr, newPrice) => {
  const newArr = [...arr, newPrice]; // Naya array banaya
  return newArr; // Original array bilkul safe hai
};