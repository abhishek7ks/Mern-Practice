// Q30 🟡 Number ke first aur last digit ka sum nikalo.

let num = 1234;
let conversion = String(num);




let first = Number(conversion[0])


let last = num%10;

let sum = first+last;
console.log(sum);