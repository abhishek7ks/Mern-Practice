// Q66 🟢 Palindrome number check karo.

let num = 1212;
let CopyNum = num;
let reverse = 0;


while(CopyNum > 0){
reverse = reverse * 10 + CopyNum%10;
CopyNum = Math.floor(CopyNum/10);
}

if(reverse === num){
    console.log(`Number is Palindrome: Your Number: ${num} And The Reverse Number: ${reverse}`);
} else{
    console.log(`Number is Not A Palindrome: Your Number: ${num} And The Reverse Number: ${reverse}`);
}