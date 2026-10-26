// Q16 🟢 `Boolean()` se 15 values test karo.

Boolean(0) // false 
Boolean(1) // true
Boolean("") // false
Boolean("hello") // true
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean([]) // true
Boolean({}) // true
Boolean("0") // true
Boolean(" ") // true
Boolean(-1) // true
Boolean(false) // false
Boolean(true) // true
Boolean([1,2,3]) // true

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(Boolean(-1));
console.log(Boolean(false));
console.log(Boolean(true));
console.log(Boolean([1,2,3]));

