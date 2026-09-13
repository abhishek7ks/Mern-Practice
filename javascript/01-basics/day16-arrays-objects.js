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

// Objects

let mydetails = {
    name: "Abhishek",
    age: 23,
    mob: 9389869959,
    email: "Abhishekkashyap152002@gmail.com",
    dob: `15-8-2003`,
    city: "Meerut",
    qualification: "Btech CSE",
    Skills: ["Html", "CSS", "JS", "GIT","GITHUB"]
}

console.log(mydetails)
console.log(mydetails.name)
console.log(mydetails["dob"])
console.log(mydetails.Skills[0])
console.log(mydetails.city)

mydetails.Skills.forEach(function(details){
    console.log(details)
})