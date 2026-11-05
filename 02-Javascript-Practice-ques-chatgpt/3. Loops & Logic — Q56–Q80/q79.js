// Q79 🔴 Nested loops se multiplication grid generate karo.

let num = 3;

let res = "";


for(let i =1; i <= num; i++){
    for(let j = 1; j <= num; j++){
        res += (i*j)+ "\t";
    }
    res += "\n";
}

console.log(res);