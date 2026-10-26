// Q15 🟢 Truthy aur falsy values ki list banao.

// Truthy & Falsy 🔷

// Falsy Values — Sirf 6 hain! (Yaad karo)

false 
0
null
"" // Empty String
undefined
NaN

// Truthy — Baaki sab! ✅

/*

"hello"   // string with value
42        // any non-zero number
[]        // empty array
{}        // empty object
"0"       // string "0" (falsy nahi!)
" "       // space wali string

*/

// ⚠️ Tricky Ones
// Ye lagta hai falsy hoga — par truthy hai!
Boolean([])    // true  😱 empty array
Boolean({})    // true  😱 empty object
Boolean("0")   // true  😱 "0" string

// 🎯 Memory Rule

// Falsy = F U N Z E B
/*
        False
        Undefined
        Null
        Zero (0)
        Empty string ("")
        Boolean false / NaN

        */

// Baaki sab → Truthy! ✅