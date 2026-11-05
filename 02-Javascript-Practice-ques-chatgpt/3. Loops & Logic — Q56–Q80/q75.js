// Q75 🟡 Perfect number check karo.

let num = 28;
let sum = 0;

for(let i = 1; i <= num/2 ; i++){
    if(num%i === 0){
        sum += i;
    }
}

if(num === sum){
    console.log(`Your Number is Perfect Number ${num}`);
}

else{
    console.log(`Your Number is Not Perfect Number ${num}`);
}