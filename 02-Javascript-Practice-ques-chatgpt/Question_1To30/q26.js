// Q26 🟢 Compound interest calculate karo.

let principal = 10000;
let rate = 5;
let time = 2;
let CI = principal * Math.pow((1 + rate/100), time) - principal;

let ans = `Your Compound Intrest is ${CI.toFixed(2)}`
console.log(ans);