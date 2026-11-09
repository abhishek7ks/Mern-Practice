// Q101 🟡 `calculate(a,b,operation)` generic function banao.

// 1. Generic Calculator Function (Arrow syntax + Type Safety check)
const calculate = (a,b,operation) => {
    if(typeof operation !== "function"){

        return "Error: operation must be a valid callback function";
    }

    return operation (a,b);
}

// 2. Specialized Operations

const add = (x,y) => x+y;
const sub = (x,y) => x-y;
const pow = (x,y) => x**y
const mod = (x, y) => x % y;
const average = (x, y) => (x + y) / 2;


// 3. Testing with predefined callbacks

console.log(calculate(2,3,add)); // Output: 5
console.log(calculate(2,3,sub)); // Output: -1
console.log(calculate(2, 3, pow));   // Output: 8  (2^3)
console.log(calculate(10, 3, mod));    // Output: 1  (Remainder)
console.log(calculate(10, 20, average)); // Output: 15


// 4. Testing with Inline Arrow Functions (Direct on the fly)
console.log(calculate(50, 20, (x, y) => x - y)); // Output: 30