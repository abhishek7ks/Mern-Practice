// Q107 🟡 Higher-order function identify karo

// 1. Normal (First-Order) Function: Na function leta hai, na function return karta hai
const double = (n) => n * 2;

// 2. Higher-Order Function (Rule 1: Function as Argument leta hai)
const runWithNumber = (num, callback) => {
  return callback(num);
};

// 3. Higher-Order Function (Rule 2: Naya Function Return karta hai)
const createAdder = (x) => {
  return (y) => x + y;
};

console.log(runWithNumber(5, double)); // Output: 10
const add10 = createAdder(10);
console.log(add10(5));                 // Output: 15