// Q37 🟢 Logical OR (||) - 10 examples

// 1. Basic true || true
console.log(true || true);  // true

// 2. true || false
console.log(true || false); // true

// 3. false || true
console.log(false || true); // true

// 4. false || false
console.log(false || false); // false

// 5. Age check - 18 se kam hai ya senior citizen
let age = 16;
console.log(age < 18 || age > 60); // true -> ek condition true hai

// 6. Login - email ya phone se login
let hasEmail = false;
let hasPhone = true;
console.log(hasEmail || hasPhone); // true

// 7. Weekend check
let day = "Sunday";
console.log(day == "Saturday" || day == "Sunday"); // true

// 8. Discount - student hai ya senior hai
let isStudent = false;
let isSenior = true;
console.log(isStudent || isSenior); // true -> discount milega

// 9. Number range se bahar hai kya?
let num = 150;
console.log(num < 0 || num > 100); // true -> range se bahar

// 10. Form validation - naam ya email khali hai kya?
let name = "";
let email = "test@gmail.com";
console.log(name == "" || email == ""); // true -> name khali hai