const prompt = require('prompt-sync')();

let number = Number(prompt("Enter Number: "))

let total = 0


if(isNaN(number) || number < 0) {
    console.log("Invalid Input");
    
}

else{

for(let i = 1; i <= number ; i++){
    
    total = total+i
    
}

console.log(`Total Numbers is: ${total} `);

}



