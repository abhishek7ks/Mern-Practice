// Q69 🟢 Prime number check karo.

let num = 9;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}
if (isPrime) {
  console.log(`${num} is a Prime Number`);
} else {
  console.log(`${num} is Not a Prime Number`);
}
