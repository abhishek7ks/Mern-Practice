// Q5 🟢 `typeof null` ka output explain karo.

// typeof null → "object"

/*Kyun hota hai ye?

JavaScript 1995 mein bana tha — bohot jaldi banaya gaya tha.

Us time values memory mein store hoti thi ek type tag ke saath:

000 → object
null → poora zero (00000000) tha memory mein

Toh jab typeof null check kiya → 000 se start → “object” bol diya ❌ */


// memory rule

/* typeof null === "object"  → JS ki purani bug hai
null fix nahi kiya        → existing code toot jaata */

// null check karne ka sahi tarika:
let x = null;

if(x === null) {       // ✅ sahi
    console.log("null hai");
}

// typeof mat use karo null check ke liye ❌

