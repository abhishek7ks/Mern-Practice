// Q34 🟢 `!=` aur `!==` compare karo.

5 != "5"   // False (Kyunki JS ne "5" ko number bana diya, aur 5 aur 5 barabar hain)
5 !== "5"  // True  (Kyunki ek Number hai aur dusra String, dono alag hain)


1 != true   // False (Kyunki true ki value internally 1 hoti hai)
1 !== true  // True  (Kyunki ek Number hai aur dusra Boolean)


5 != 6   // True (Dono ki value alag hai)
5 !== 6  // True (Value alag hai, bhale hi type same ho)

console.log(5 != "5");   // false
console.log(5 !== "5");  // true

console.log(1 != true);  // false
console.log(1 !== true); // true

console.log(5 != 6);     // true
console.log(5 !== 6);    // true