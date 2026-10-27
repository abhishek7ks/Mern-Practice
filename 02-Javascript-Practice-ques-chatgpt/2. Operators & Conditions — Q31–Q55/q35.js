// Q35 🟢 `>`, `<`, `>=`, `<=` se comparison problems solve karo.

/* 
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to

*/

let a = 20;
let b = 15;
let age = 17;
let eq = 10;
let eq1 = 10;

// > Greater than
console.log(a > b); // true -> 20 bada hai 15 se

// < Less than
console.log(a < b); // false

// >= Greater than or equal to
console.log(eq >= eq1); // true -> 10 >= 10

// <= Less than or equal to
console.log(eq <= eq1); // true

// Practical - voting check
if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible, age kam hai");
}