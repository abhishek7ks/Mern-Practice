// Q44 🟢 Maximum of 3 numbers nikalo.

let a = 10;
let b = 10;
let c = 20;

if(a === b && b === c){
console.log(`All Numbers are Equal: ${a} ${b} ${c}`);

}

else{ 
if(a>b && a>c){
    console.log(`A is Greater than B and C: ${a}`);
} else if(b > a && b > c){
    console.log(`B is Greater than A and C: ${b}`);
} else{
    console.log(`C is Greater than A and B: ${c}`);
}
}
