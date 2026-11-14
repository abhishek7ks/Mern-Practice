// Q115 🔴 Function composition ka utility banao.
// Definition: Multiple functions ko ek pipeline mein jodna, jahan ek function
// ka output agle function ka input banta hai (Execution: Right -> Left).

// 1. Step-by-Step Version (For Loop)
const compose = (...fns) => {
  return (initialValue) => {
    let result = initialValue;

    // Rightmost function se shuru karke leftmost tak chalao
    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }

    return result;
  };
};

// 2. Interview / Production 1-Liner (reduceRight)
const composeShort = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => fn(acc), x);

// --- Testing ---
const add2 = (n) => n + 2;
const multiply3 = (n) => n * 3;
const subtract1 = (n) => n - 1;

const calculate = compose(subtract1, multiply3, add2);
console.log(calculate(5)); // Output: 20