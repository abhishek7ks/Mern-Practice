// Q78 🟡 while loop se menu-driven program banao.

let menu = "1. Add  2. Subtract  3. Multiply  4. Divide  5. Exit";

let inp = Number(prompt(menu));

let numA = 50;
let numB = 50;

while (inp !== 5) {
  if (inp === 1) {
    console.log(`Add: ${numA + numB}`);
  } else if (inp === 2) {
    console.log(`Subtract: ${numA - numB}`);
  } else if (inp === 3) {
    console.log(`Multiply: ${numA * numB}`);
  } else if (inp === 4) {
    console.log(`Divide: ${numA / numB}`);
  } else {
    console.log(`Invalid choice: ${inp}`);
  }

  inp = Number(prompt(menu));
}

console.log("Bye!");