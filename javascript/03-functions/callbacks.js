function calculate(num1, num2, operation){
console.log(operation(num1,num2));

}

function add(a,b){
    return a+b;
}

function sub (a,b){
    return a-b;
}

calculate(10,5,add)