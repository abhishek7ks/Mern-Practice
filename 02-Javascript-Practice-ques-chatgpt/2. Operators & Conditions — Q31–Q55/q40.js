// Q40 🟢 Ternary operator se positive/negative check

// Syntax: condition ? true_wala : false_wala

let num = 5;
let result = num >= 0 ? "Positive" : "Negative";
console.log(result); // Positive

let num2 = -10;
let result2 = num2 >= 0 ? "Positive" : "Negative";
console.log(result2); // Negative

// Advance - Positive / Negative / Zero teeno
let num3 = 0;
let check = num3 > 0 ? "Positive" : num3 < 0 ? "Negative" : "Zero";
console.log(check); // Zero