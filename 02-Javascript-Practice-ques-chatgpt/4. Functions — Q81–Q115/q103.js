// Q103 🟡 Custom `forEach` function implement karo.

const CustomForeach = (arr, callbback) => {
    
    for(let i = 0; i < arr.length; i++){
        callbback(arr[i]);
        
    }

}

const value = ["abhishek","abhi","aparna"];
const det = (val) => console.log(val);;

CustomForeach(value, det);