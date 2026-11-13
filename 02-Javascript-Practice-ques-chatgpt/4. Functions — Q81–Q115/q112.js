// Q112 🔴 Recursive array sum function banao.

const recursiveArraySum = (num, i = 0) => {
  if (num.length === i) {
    return 0;
  }

  return num[i] + recursiveArraySum(num, i + 1);
};

let arr = [10, 20, 30, 40, 50];
console.log(recursiveArraySum(arr));
