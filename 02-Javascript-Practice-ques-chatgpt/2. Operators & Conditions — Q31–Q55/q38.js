// Q38 🟢 Logical NOT (!) - 10 examples

// 1. Basic NOT
console.log(!true);  // false
console.log(!false); // true

// 2. Double NOT (value ko boolean me convert)
console.log(!!true);  // true
console.log(!!false); // false

// 3. 0 is falsy
console.log(!0); // true -> 0 falsy hai
console.log(!1); // false -> 1 truthy hai

// 4. Empty string is falsy
console.log(!"");        // true
console.log(!"hello");   // false

// 5. null / undefined are falsy
console.log(!null);      // true
console.log(!undefined); // true

// 6. Practical - login check
let isLoggedIn = false;
console.log(!isLoggedIn); // true -> login nahi hai

// 7. Age check ulta
let age = 20;
console.log(!(age >= 18)); // false -> !true = false

// 8. Array empty check
let arr = [];
console.log(!arr.length); // true -> length 0 hai to true

// 9. String empty check
let name = "";
console.log(!name); // true -> naam khali hai