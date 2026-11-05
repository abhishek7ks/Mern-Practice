// Q70 🟢 1–N primes print karo.

let n = 20;


for(let i = 2; i <= n; i++){
    let isPrime = true;

    for(let j = 2; j < i; j++){
        if(i % j === 0){
            isPrime = false
        } 


    }

        if(isPrime){
console.log(`Prime Numbers ${i}`);
        }

}  
