// Q110 🟡 Recursive factorial function banao.

const recursiveFunction = (num) => {

    if(num <= 1 || num === 0){

        return 1;
    }

    return num * recursiveFunction(num - 1);
}

console.log(recursiveFunction(0));