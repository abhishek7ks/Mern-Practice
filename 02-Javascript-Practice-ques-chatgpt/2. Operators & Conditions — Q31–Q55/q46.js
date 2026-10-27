// Q46 🟢 Leap year checker banao.

let year = 2004;

if ((year%4 === 0 && year%100 !== 0) || (year%400 === 0)) {
console.log(`This Year is Leap Year: ${year}`);
} else{
    console.log(`This Year is Not Leap Year: ${year}`);
}