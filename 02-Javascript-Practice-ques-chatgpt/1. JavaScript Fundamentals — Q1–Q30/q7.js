// Q7 🟢 String ko number mein convert karne ke 3 tarike likho.

// String → Number (3 Tarike) 🔷

// 3 Methods:

let str = "42";
console.log(typeof(str));

// 1. Number()
Number(str)       // 42
console.log(typeof(str));


// 2. parseInt()
parseInt(str)     // 42
console.log(typeof(str));


// 3. + operator (Unary)
+str              // 42 
console.log(typeof(str));




// ⚠️ Important Difference 

// parseInt vs Number
parseInt("42px")   // 42  ✅ number nikal leta hai
Number("42px")     // NaN ❌ pure number chahiye

// NaN = Not a Number

// 🎯 Memory Rule

Number()   // → pure number string pe use karo
parseInt() // → mixed string pe (jaise "42px")
+str        // → shorthand, production mein avoid karo


