// Q102 🟡 Array processing ke liye custom callback function

const processArray = (arr,callback) => {

    const result = [];
    for(let i = 0; i < arr.length; i++){
        const ans = callback(arr[i])
        result.push(ans);
    }

    return result;
}

let number = [1,2,3,4,5];
const double = (num) => num*2;
console.log(processArray(number,double));