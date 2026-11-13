// Q111 🟡 Recursive Fibonacci function banao.

const f = (num) => {
  if (num <= 1) {
    return num;
  }

  return f(num - 1) + f(num - 2);
};

console.log(f(4));