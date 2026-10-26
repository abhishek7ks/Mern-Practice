// Q9 🟢 `"10" + 5` ka result predict karo.

// "10" + 5 🔷

// Answer:

console.log("10" + 5);  // "105"

/* 
Kyun? — Type Coercion

+ operator ka rule:

Agar ek bhi String ho → dono String ban jaate hain 

*/

/* 
"10" + 5
→ "10" + "5"   ← 5 string ban gaya
→ "105"        ← concatenation hua, addition nahi! 
*/

// ⚠️ Interesting Cases

"10" - 5   // 5   ← minus string nahi banata, number banata hai
"10" * 2   // 20  ← same
"10" / 2   // 5   ← same

// Sirf + confusing hai! ❌

// 🎯 Memory Rule

// +  →  string mile toh concatenate karta hai
// -, *, /  →  hamesha number mein convert karta hai