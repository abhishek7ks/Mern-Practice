let clock = document.querySelector(".clock")

setInterval(() => {
    
    let date = new Date()

    let currenttime = date.toLocaleTimeString();

    clock.innerHTML = currenttime

}, 1000);