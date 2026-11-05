// Q73 🟢 LCM calculate karo.

let numA = 12;
let numB = 20;

let LCM;
let MaxLimit = Math.max(numA, numB);

for (let i = MaxLimit; i <= (numA * numB); i++) {
  if (i % numA === 0 && i % numB === 0) {
    LCM = i;
    break;
  }
}

console.log(`LCM Of ${numA} And ${numB} is ${LCM}`);