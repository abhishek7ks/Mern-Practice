// Q68 🟢 Power without `Math.pow()` calculate karo.

let num = 2;
let power = 5;
let cpPower = power;

let sum = 1;

while(cpPower > 0){
sum = sum * num;
cpPower--;

}
console.log(`${num} to the power ${power} is ${sum}`);