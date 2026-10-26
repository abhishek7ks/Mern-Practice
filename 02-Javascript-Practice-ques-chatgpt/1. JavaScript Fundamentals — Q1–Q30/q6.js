// Q6 🟢 Primitive aur reference values ka basic difference samjhao.

// Primitive vs reference values

/* Analogy 
Primitive = photocopy badlo original safe.
reference = google doc ka link , ek badla dono badal gye. */

// primitive copy hoti hai //

let a = 10;
let b = a;

b = 20;

console.log(a); 
console.log(b);

let obj1 = {
    name: "Abhishek",
    age: 23
}
console.log(obj1);

let obj2 = obj1

obj2.name = "lovesh"
console.log(obj2);

/* Primitive  → Number, String, Boolean, Null, Undefined
           → Copy hoti hai → Original safe

Reference  → Object, Array, Function
           → Link share hota hai → Dono change hote hain */