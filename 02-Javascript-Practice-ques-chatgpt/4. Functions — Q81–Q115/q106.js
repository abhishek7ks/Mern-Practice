//  Q106 🟡 Custom `reduce` function implement karo.


const customReduce = (arr, callback, initialvalue) => {
    let acc = initialvalue;

    for(let i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i]);

    }

    return  acc;
}

const numbers = [10,15,25,50];
const totalSum = (total, currentValue) => total + currentValue;
const sero = 0;

console.log(customReduce(numbers,totalSum, sero));