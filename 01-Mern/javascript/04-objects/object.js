 /* function createBank(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount){
balance = balance+amount
        },
        checkbalance: function(){
            console.log(balance);
            
            return balance;
        }
    }
} 
const myAccount = createBank(1000);
myAccount.deposit(500);
console.log(myAccount.balance);
myAccount.checkbalance();

*/


// const car = {
//     brand: "volvo",
//     year: 2015,
//     isElectric: true,
//     start: function(){
//         console.log("Engine started!");
          
//     },
//     getDetails: function(){
//         console.log(`This is a ${this.year} ${this.brand}`);
        
//     }
// }


// car.getDetails();
// console.log(car.year);
// console.log(car["brand"]);

// car.year = 2022;
// car.color = "red";
// delete car.isElectric;
// car.start();

// console.log(car);



const garage = [
    {brand: "volvo", year: 2015},
    {brand: "tata", year:2022}
];

console.log(garage[0].brand);
console.log(garage[1].brand);

garage.push({brand: "mahindra", year: 2024})

console.log(garage);

garage.forEach(function(car){
    console.log(car.brand);
    
})

const newCar = garage.filter(car => car.year > 2020) 
.map(name => name.brand)
console.log(newCar);


const singleCar = garage.find(car => car.year > 2020);
console.log(singleCar);

garage.unshift({brand: "jupiter", year:2026})

console.log(garage);


const futureCar = garage.find(car => car.year > 2030);
console.log(futureCar);
