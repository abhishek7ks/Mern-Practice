// Q20 🟢 Minutes ko hours + minutes mein convert karo.

let totalMinutes = 233;

let hours = Math.floor(totalMinutes/60);

let minutes = totalMinutes%60


let currentTime = `Current Time is ${hours} Hours and ${minutes} Minutes`
console.log(currentTime);