// Q76 🟡 Decimal to binary convert karo.

let num = 13;

let binary = "";

while(num > 0){
    binary = num%2 + binary;
    num = Math.floor(num / 2);


}

console.log(binary);