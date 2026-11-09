// Q85 🟢 Default parameter use karo.

function greet(name = "Guest") {
  console.log(`Hello ${name}!`);
}

greet("Abhishek");   // Hello Abhishek!
greet();             // Hello Guest!