// Q63 🟢 Number ke digits count karo.

let num = 0;
let count = 0
 
num = Math.abs(num)

if(num === 0){
    count = 1
} else{

while(num > 0){
  num = Math.floor(num/10);
    count++
} }

console.log(`${count}`);

