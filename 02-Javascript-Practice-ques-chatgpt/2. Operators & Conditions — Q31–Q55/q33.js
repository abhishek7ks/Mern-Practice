// Q33 🟢 `==` aur `===` ke 10 examples compare karo.

// ==   Loose equality - type ko convert karke value check karta hai
// ===  Strict equality - type aur value dono same hone chahiye

// 1. Number vs String
console.log(5 == "5");   // true  -> value same
console.log(5 === "5");  // false -> type alag (number vs string)

// 2. 0 vs false
console.log(0 == false);  // true  -> false ko 0 bana diya
console.log(0 === false); // false -> type alag

// 3. 0 vs empty string
console.log(0 == "");  // true
console.log(0 === ""); // false

// 4. null vs undefined
console.log(null == undefined);  // true  -> loose me same mante hain
console.log(null === undefined); // false -> type alag

// 5. 1 vs true
console.log(1 == true);  // true
console.log(1 === true); // false

// 6. empty string vs false
console.log("" == false);  // true
console.log("" === false); // false

// 7. "0" vs false
console.log("0" == false);  // true -> dono 0 ban jate hain
console.log("0" === false); // false

// 8. Same value same type
console.log(10 == 10);  // true
console.log(10 === 10); // true -> ye dono me true ayega

// 9. null vs null
console.log(null == null);  // true
console.log(null === null); // true

// 10. NaN ka khel (sabse alag case)
console.log(NaN == NaN);  // false -> NaN khud se bhi equal nahi
console.log(NaN === NaN); // false