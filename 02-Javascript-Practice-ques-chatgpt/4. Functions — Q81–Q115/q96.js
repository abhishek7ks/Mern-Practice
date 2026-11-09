// Q96 🟢 `calculateDiscount()` function banao.



const calculateDiscount = (price, dis) => {

   

    return  price - (price*dis)/100;
}

console.log(calculateDiscount(1000,10));
console.log(calculateDiscount(2000,10));