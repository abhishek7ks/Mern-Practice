// Q104 🟡 Custom `map` function implement karo.

const customMap = (arr,callback) => {
    const result = []

    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
        
    }

    return result;
}

const numbArr = [10,20,30,40,50];

const det = (num) => num / 2 ;

console.log(customMap(numbArr,det));