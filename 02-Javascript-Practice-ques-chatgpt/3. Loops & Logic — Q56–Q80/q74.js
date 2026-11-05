// Q74 🟡 Armstrong number check karo.

let num = 154;
let cpNum = num;
let NorNum;
let Armstrong = 0;

while(cpNum > 0){
    NorNum = cpNum%10
    NorNum = Math.pow(NorNum, 3)
    cpNum =  Math.floor(cpNum/10);
    Armstrong += NorNum
    
}

console.log(Armstrong);

if(Armstrong === num){
    console.log(` if block Your Number is Armstrong Number ${Armstrong} ${num}`);
} else{
    console.log(`Your Number is Not Armstrong Number ${Armstrong} ${num}`);
}