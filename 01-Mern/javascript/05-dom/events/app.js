let button = document.querySelector("#btn");
let h1 = document.querySelector("#heading");


let count = 0;

button.addEventListener("click", function(){
    count++;
    
    if(count === 3) {
h1.textContent = "3 baar button Clicked hogya";
    h1.style.color = "green";
    }
    
})