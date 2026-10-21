
let inp = document.querySelector("input");
let btn = document.querySelector(".button-container");

btn.addEventListener("click", function(e) {

    let clickKiya = e.target.innerText;   // jo button dabaya

    // ---- CASE 1: C dabaya ----
    if (clickKiya === "C") {
        inp.value = "";        // display khaali
        return;                // aage mat jao
    }

    // ---- CASE 2: = dabaya ----
    if (clickKiya === "=") {
        let expression = inp.value;    // "78+5"

        // Check karo kaunsa operator hai
        if (expression.includes("+")) {
            let parts = expression.split("+");   // ["78", "5"]
            inp.value = Number(parts[0]) + Number(parts[1]);
        }
        else if (expression.includes("-")) {
            let parts = expression.split("-");
            inp.value = Number(parts[0]) - Number(parts[1]);
        }
        else if (expression.includes("*")) {
            let parts = expression.split("*");
            inp.value = Number(parts[0]) * Number(parts[1]);
        }
        else if (expression.includes("/")) {
            let parts = expression.split("/");
            inp.value = Number(parts[0]) / Number(parts[1]);
        }
        return;              // aage mat jao
    }

    // ---- CASE 3: Baaki sab (numbers aur operator) ----
    inp.value += clickKiya;   // display mein jodo

});

