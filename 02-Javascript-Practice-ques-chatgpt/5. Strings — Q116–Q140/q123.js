// Q123 🟢 String reverse karo.

const rev = (details) => {
  let reverse = "";

  for (let i = details.length - 1; i >= 0; i--) {
    reverse = reverse + details[i];
  }

  return reverse;
};

console.log(rev("Abhishek"));
console.log(rev("Ayushi"));
console.log(rev("Abhi"));
