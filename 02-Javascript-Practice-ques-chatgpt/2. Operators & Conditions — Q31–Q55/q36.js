// Q36 🟢 Logical AND (&&) - 10 examples



// 1. Basic true && true
console.log(true && true);  // true

// 2. true && false
console.log(true && false); // false

// 3. false && true
console.log(false && true); // false

// 4. false && false
console.log(false && false); // false

// 5. Age + ID check
let age = 20;
let hasID = true;
console.log(age >= 18 && hasID); // true

// 6. Marks + Attendance
let marks = 45;
let attendance = 80;
console.log(marks > 33 && attendance > 75); // true

// 7. Login + Admin check
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin); // false

// 8. Range check (0 se 100 ke beech)
let num = 50;
console.log(num > 0 && num < 100); // true

// 9. Email + Password validation
let email = "test@gmail.com";
let pass = "12345678";
console.log(email.includes("@") && pass.length >= 8); // true

// 10. 2 number dono even hai kya?
let a = 4;
let b = 6;
console.log(a % 2 == 0 && b % 2 == 0); // true