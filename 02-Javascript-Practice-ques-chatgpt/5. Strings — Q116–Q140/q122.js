// Q122 🟢 Substring extract karo.

const text = "JavaScript is fun";

// 1. Beech ka hissa nikalna: .slice(startIndex, endIndex)
// Note: startIndex include hota hai, lekin endIndex include NAHI hota.
console.log(text.slice(0, 4));    // Output: "Java" (index 0, 1, 2, 3)
console.log(text.slice(4, 10));   // Output: "Script" (index 4 se 9 tak)

// 2. Kisi index se lekar bilkul end tak nikalna
console.log(text.slice(14));      // Output: "fun" (index 14 se end tak)

// 3. Peeche se (Negative index) extract karna
console.log(text.slice(-3));      // Output: "fun" (aakhiri 3 characters)
console.log(text.slice(0, -4));   // Output: "JavaScript is" (aakhiri 4 chars chhod kar)

// 4. Purana method: .substring(start, end)
// Kaam same karta hai, bas negative index support nahi karta
console.log(text.substring(4, 10)); // Output: "Script"