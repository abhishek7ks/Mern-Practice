// Q124 🟢 Palindrome string check karo.

const isPalindromestring = (value) => {

    let cleanValue = value.toLowerCase();
    let reverse = ""
    for(let i = cleanValue.length-1; i >= 0; i--){
          reverse +=  cleanValue[i];
    }

   return reverse === cleanValue
}

console.log(isPalindromestring("abhishek"));
console.log(isPalindromestring("Nitin"));