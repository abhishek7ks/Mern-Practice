// Q114 🔴 Memoized Fibonacci function banao.

const fibMemo = (num, memo = {}) => {
    
    if(num in memo){
        return memo[num];
    }
        
    if (num <= 1 ) {
        return num;
    } 

    memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);


    return memo[num];
}

console.log(fibMemo(50));