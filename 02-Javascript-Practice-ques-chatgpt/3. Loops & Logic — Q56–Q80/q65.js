// Q65 🟢 Number reverse karo.

let num = 1234;
let reverse = 0 ;



while(num>0){
    reverse =  reverse*10 + num%10            // first loop reverse value is = 0 then 0*10 = 0. num%10 = 4 . 0+4 is 4 reverse value is 4
    num = Math.floor(num/10);                 // reverse value is 4*10 = 40 + 3 43.            
}

console.log(reverse);
