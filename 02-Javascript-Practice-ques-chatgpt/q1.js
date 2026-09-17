//   Q1 🟢 `let`, `const` aur `var` mein difference batao aur example do.

/* let modern way hai blocked scope hota hai 
var old way hai hoisting hoti hai functional scope hai isme
const constant rehta hai */


/*

var - purana dost - koi rules nahi, kahi bhi ghus jaata hai
let - naya dost - thoda disciplined, boundary samjhta hai
const - pakka commitment - ek baar decide karo,badlo mat

*/

/* 
3 things to compare

1. scope - variable kahan tak dikhta hai ?
2. re-declare same naam se dobara declare kar skte ho ?
3. Re-assign - value badal skte ho?
*/


/* 1 Scope - Sabse Important Concept 

var - function Scope
*/

// let & const block scope {}
function test() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ERROR — y yahan exist hi nahi karta
  console.log(z); // ❌ ERROR — z bhi nahi
} 


// 2️⃣ RE-DECLARE — Same naam dobara likhna
// VAR — allowed 😬
// 
 /*
var name = "Abhi";
var name = "Kashyap"; // ✅ koi error nahi — dangerous!

LET — not allowed ✅
let age = 23;
let age = 25; // ❌ ERROR — SyntaxError

CONST — not allowed ✅
const city = "Meerut"; 
const city = "Noida"; // ❌ ERROR 

*/


/* quick comparison table 



*/