// Q71 🟢 Fibonacci series generate karo.

let numA = 0;
let numB = 1;


let sum;
let length = 10;




for(let i = 1; i <= length; i++ ){

    sum = numA + numB ;
    console.log(numA);
    numA = numB;
    numB = sum;
    

    

 
}