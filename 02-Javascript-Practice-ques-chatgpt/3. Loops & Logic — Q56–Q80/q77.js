// Q77 🟡 Binary to decimal convert karo.

let num = 13;
let Binary = "";
let newNumb = num


while(num > 0) {
  Binary = (num % 2) + Binary;
  num = Math.floor(num / 2);
}

console.log(`Your Number is ${newNumb} And Your Binary Number is ${Binary}`);


let newBinary = Number(Binary);
let power = 1;
let result = 0;

while(newBinary > 0) {

    let digit = newBinary%10;
    result = result + digit*power
    power = power*2
    newBinary = Math.floor(newBinary / 10);
}

console.log(`Your Binary Conversion To original is Your Binary ${Binary} And Your Conversion ${result}`);
