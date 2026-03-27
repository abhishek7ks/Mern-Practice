// Day 16
// Arrays + Objects practice
// map, filter, forEach




let grocerylist = ["eggs","Panner","whey","Creatine","omega3"]

console.log(grocerylist[2])
grocerylist.push("banana");
console.log(grocerylist)
console.log(grocerylist.length)

grocerylist.forEach(function(cheez){
    console.log(cheez)


})


let buygrocery = grocerylist.map(function(cheez){
    return "Buy: " + cheez

})

console.log(buygrocery)

let filtergrocerylist = grocerylist.filter(function(cheez){
return cheez.length > 5
})
console.log(filtergrocerylist)