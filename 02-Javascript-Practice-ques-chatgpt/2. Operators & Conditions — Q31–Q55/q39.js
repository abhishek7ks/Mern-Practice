// Q39 🟢 Short-circuit Evaluation

// 1. && me pehla false hai to dusra check hi nahi hota
console.log(false && console.log("ye kabhi print nahi hoga")); // false
// dusra wala execute hi nahi hua

// 2. || me pehla true hai to dusra check hi nahi hota
console.log(true || console.log("ye bhi print nahi hoga")); // true

// 3. Practical && - Login hai tabhi dashboard dikhao
let isLoggedIn = true;
let showDashboard = () => "Dashboard dikha diya";
console.log(isLoggedIn && showDashboard()); // Dashboard dikha diya

let isLoggedIn2 = false;
console.log(isLoggedIn2 && showDashboard()); // false -> function chala hi nahi

// 4. Practical || - Default value dena
let name = "";
let finalName = name || "Guest";
console.log(finalName); // Guest -> name khali tha to dusra le liya

let name2 = "Abhishek";
let finalName2 = name2 || "Guest";
console.log(finalName2); // Abhishek -> pehla hi truthy tha to short-circuit

// 5. && se safe check
let user = null;
// user && user.name -> error se bach gaya kyuki user null hai to aage gaya hi nahi
console.log(user && user.name); // null

let user2 = { name: "Abhishek" };
console.log(user2 && user2.name); // Abhishek

// 6. || se fallback
let age;
console.log(age || 18); // 18 -> age undefined hai to 18 le liya