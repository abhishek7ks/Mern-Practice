// Q100 🟡 Callback ka simple example banao.

function operate (a,b, Callback){

    return Callback(a,b);
}

function add(x,y){

    return x+y;
}

function sub(x,y){

    return x-y;
}

function mul(x,y){

    return x*y
}
 

console.log(operate(5,10,add));

const div = (x,y) => x/y;

console.log(operate(10,5,div));