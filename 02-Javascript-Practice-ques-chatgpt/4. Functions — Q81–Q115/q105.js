// Q105 🟡 Custom `filter` function implement karo.

const customFilter = (arr,callback) => {
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result.push((arr[i]))
        }
    }

    return result;
}

const numbers = [10,20,10,25,5,30];
const det = (num) => num > 10;
const isEven = (num) => num % 2 === 0;
console.log(customFilter(numbers, isEven));

console.log(customFilter(numbers,det));