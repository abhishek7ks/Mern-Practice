// Q11 🟢 `Number()`, `parseInt()`, `parseFloat()` compare karo.

// 3 Methods Compare 🔷

console.log(Number("42.5"));                // 42.5  ✅
console.log(parseInt("42.5"));             // 42    ← decimal cut ho gaya
console.log(parseFloat("42.5"));         // 42.5  ✅

console.log(Number("42px"));         // NaN   ❌ pure number chahiye
parseInt("42px")    // 42    ✅ number nikal leta hai
parseFloat("42px")  // 42    ✅ number nikal leta hai

Number("")          // 0     ⚠️
parseInt("")        // NaN
parseFloat("")      // NaN



//🎯 Memory Rule

/* 

Number()      → pure number string ho toh use karo
parseInt()    → sirf integer chahiye (decimal nahi)
parseFloat()  → decimal bhi chahiye

*/