// Q49 🟢 Electricity bill slab calculator

let units = 250;
let bill = 0;

if (units <= 100) {
  bill = units * 5;
} else if (units <= 200) {
  bill = (100 * 5) + (units - 100) * 7;
} else if (units <= 300) {
  bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
} else {
  bill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
}

console.log(`Units: ${units}`);
console.log(`Total Bill: Rs ${bill}`);

// Slab:
// 0-100   = Rs 5/unit
// 101-200 = Rs 7/unit
// 201-300 = Rs 10/unit
// 300+    = Rs 12/unit