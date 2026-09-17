const prompt = require('prompt-sync')();

let number = Number(prompt("Enter Number: "))

let total = []


if (isNaN(number) || number < 0) {
    console.log("Invalid Input");

}

else {

    for (let i = 1; i <= number; i++) {

   if(number%i === 0) {
    total.push(i)
   }


    }

    console.log(`Total Numbers is: ${total} `);

}



