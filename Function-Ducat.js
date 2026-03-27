// function hello(){
//     return `Hello World`;
// }

// console.log(hello());

// function sum(num1 , num2){
//     let = total = num1+ num2;
//     return total;
// }

// console.log(sum(5,10));
// console.log(sum(5,20));

// function sqr(num){
//     let tot = num*num;
//     return tot;
// }

// console.log(sqr(2));
// console.log(sqr(50));

// function evenodd(num){
//     if(num%2===0){
//        return `number is even ${num}`
//     } else{
//         return `Number is odd ${num}`
//     }

// }
// let meraResult = evenodd(90);
// console.log(meraResult);

// function leapyear(year) {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     return ` It is a leap ${year}`;
//   } else {
//     return `It is not a leap ${year}`;
//   }
// }

// let result = leapyear(2026);
// console.log(result)


// fibonacci series
function fibonacciBanao(kitneNumberChahiye) {
  let fiboarr = [0, 1];

  console.log(fiboarr[0]);
  console.log(fiboarr[1]);

  for (let i = 2; i < kitneNumberChahiye; i++) {
    let c = fiboarr[i-1] + fiboarr[i-2];

    fiboarr.push(c);
  }
  return fiboarr;
}

let result = fibonacciBanao(10);
console.log(result)

