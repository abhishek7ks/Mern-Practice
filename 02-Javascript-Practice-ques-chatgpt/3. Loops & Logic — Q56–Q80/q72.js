// Q72 🟢 GCD calculate karo.

let numA = 12;
let numB = 24;

let GCD;
let limit = Math.min(numA,numB);

console.log(limit);
for(let i = 1; i <= limit; i++ ){
if(numA%i === 0 && numB%i === 0){
    GCD = i;
}

}

console.log(`GCD Of ${numA} And ${numB} is ${GCD}`);