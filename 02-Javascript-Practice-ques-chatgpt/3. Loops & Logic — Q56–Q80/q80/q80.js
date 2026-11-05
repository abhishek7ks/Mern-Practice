// Q80 🔴 Number guessing engine banao jisme attempts count hon.

let secret = Math.floor(Math.random() * 100) + 1; // 1 to 100 random number
let attempts = 0;
let guessed = false;

while (!guessed) {
  let input = prompt("1 se 100 ke beech koi number guess karo (ya Cancel dabao bahar nikalne ke liye):");

  // Agar user Cancel dabaye
  if (input === null) {
    alert("Khel beech mein chhod diya gaya!");
    break;
  }

  let guess = Number(input);

  // Invalid input check
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Kripya 1 se 100 ke beech ka valid number daalein!");
    continue; // Is turn ko count kiye bina dubara pucho
  }

  attempts++; // Valid guess milte hi attempt count badhao

  if (guess === secret) {
    alert(`🎉 Badhaai ho! Number ${secret} sahi guess kiya.\nTotal Attempts: ${attempts}`);
    guessed = true; // Loop rokne ke liye
  } else if (guess > secret) {
    alert(`Too High! 📉 (Attempt #${attempts}): Chhota number socho.`);
  } else {
    alert(`Too Low! 📈 (Attempt #${attempts}): Bada number socho.`);
  }
}