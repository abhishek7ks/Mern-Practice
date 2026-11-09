// Q98 🟡 Function ko argument ke roop mein pass karo.

const add = (a,b) => (a+b);
const sub = (a,b) => (a-b);

const calculate = (x,y,operations) => operations(x,y);

console.log(calculate(10,5,add));
console.log(calculate(10,5, sub));