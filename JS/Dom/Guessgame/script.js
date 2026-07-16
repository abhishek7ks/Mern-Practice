let randomNumber = Math.floor(Math.random() * 100 + 1);

const form = document.querySelector(".form");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let prevGuess = []; 
let numguess = 1;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let guess = parseInt(userInput.value);
  console.log("User ne guess kiya hai: ", guess);

  // 1. Validation Checks
  if (isNaN(guess)) {
    alert("Please ek valid number daaliye!");
  } else if (guess < 1) {
    alert("Number 1 se bada hona chahiye!");
  } else if (guess > 100) {
    alert("Number 100 se chota hona chahiye!");
  } else {
    
    // Valid number ko array mein push kiya
    prevGuess.push(guess);

    // 2. Game Over Check (Agar 10 attempts khatam ho gaye)
    if (numguess === 10) { 
        userInput.value = '';
        userInput.setAttribute('disabled', ''); // Input box ko block kiya
        lowOrHi.innerHTML = `<h2>Game Over! The number was ${randomNumber}</h2>`;
    } 
    // 3. Asali Khel (Agar attempts bache hain)
    else {
        
        // Match checking
        if (guess === randomNumber) {
            lowOrHi.innerHTML = `<h2>You guessed it right! 🎉</h2>`;
            userInput.setAttribute('disabled', ''); // Jeetne par input band
        } else if (guess < randomNumber) {
            lowOrHi.innerHTML = `<h3>Too Low! Try a bigger number.</h3>`;
        } else if (guess > randomNumber) {
            lowOrHi.innerHTML = `<h3>Too High! Try a smaller number.</h3>`;
        }

        // UI Updates (Agle round ke liye taiyari)
        userInput.value = ''; // Input box khali kiya
        guesses.innerHTML += `${guess}, `; // Pichla guess screen par dikhaya
        numguess++; // Attempt count badhaya
        lastResult.innerHTML = `${11 - numguess}`; // Remaining chances kam kiye
    }
  }
});