// Q21 🟢 Seconds ko `hh:mm:ss` mein convert karo.

let totSeconnds = 3661;

let hours = Math.floor(totSeconnds/3600);
console.log(hours);
let minutes = Math.floor(totSeconnds%3600/60);
console.log(minutes);
let Seconds = Math.floor((totSeconnds%3600)%60);
console.log(Seconds);

let currentTime = `Current Time is ${hours}:${minutes}:${Seconds}`;
console.log(currentTime);