// Q2 🟢 Valid aur invalid JavaScript variable names identify karo.

let name; // letter/underscore se start
let _name; // underscore
let $price; // $
let name123; // digit baad mein
let firstName; // camelCase standard

/*   

let 123name;        // digit se start nahi ✅
let first-name;     // hyphen nahi ✅
let first name;     // space nahi ✅
let first@name;     // special char nahi ✅
let class;          // reserved keyword nahi ✅

*/

/*  🔑 Memory Rule

First char: letter, _, $ only
Baaki: letter, digit, _, $
Reserved words: let, const, var, class, function, etc. — avoid karo */