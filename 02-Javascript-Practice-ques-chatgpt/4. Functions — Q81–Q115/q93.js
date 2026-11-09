// Q93 🟢 `isPalindrome()` function banao.

function isPalindrome(num) {
  let str = "";
  let num1 = num;
  while (num1 > 0) {
    str = str + (num1 % 10);
    num1 = Math.floor(num1 / 10);

    
  }
  return num === Number(str);
}

console.log(isPalindrome(121));



