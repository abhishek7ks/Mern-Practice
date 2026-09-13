const prompt = require('prompt-sync')();
let number = Number(prompt("Enter Number: "));

if (isNaN(number) || number <= 1) {
    // 1 aur negative numbers prime nahi hote, toh unko yahin rok do
    console.log("Invalid Input ya Prime Nahi Hai");
} 
else {
    // 1. Shuru mein maan lo ki number ekdum shareef (Prime) hai
    let isPrime = true;

    // 2. Loop roopi Police check karegi (2 se lekar us number se ek kam tak)
    for (let i = 2; i < number; i++) {
        
        // Agar number kisi bhi 'i' se divide ho gaya (chor pakda gaya!)
        if (number % i === 0) {
            isPrime = false; // Sabit ho gaya ki shareef nahi hai
            break;           // Aur aage check karne ki zarurat nahi, loop rok do
        }
    }

    // 3. Loop (checking) poori hone ke baad, aaram se Faisla sunao
    if (isPrime === true) {
        console.log(`${number} ek Prime Number Hai!`);
    } else {
        console.log(`${number} ek Prime Number Nahi Hai!`);
    }
}