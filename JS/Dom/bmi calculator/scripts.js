let form = document.querySelector(".form");

// Yahan apni Google AI Studio wali API Key daalein
const API_KEY = "Your Api Key"; 

// Dhyan dein: function ke aage 'async' lagaya gaya hai
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let height = parseFloat(document.querySelector("#Height").value);
  let weight = parseFloat(document.querySelector("#Weight").value);
  let res = document.querySelector(".result h1");

  if (isNaN(height) || height <= 0) {
    res.innerHTML = "Please Give a Valid Height!";
    res.style.color = "red";
  } else if (isNaN(weight) || weight <= 0) {
    res.innerHTML = "Please Give a Valid Weight!";
    res.style.color = "red";
  } else {
    res.style.color = "black";

    let bmi = (weight / ((height * height) / 10000)).toFixed(1);

    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Healthy Weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    // 1. API call hone se pehle user ko "Loading" state dikhayein
    res.innerHTML = `Your BMI is: ${bmi} <br> Category: ${category} <br><br> <span style="font-size: 16px; color: gray;">Getting health tips from Gemini AI... ⏳</span>`;

    // === GEMINI API INTEGRATION START ===
  // === NAYA GEMINI 3.5 INTERACTIONS API INTEGRATION ===
    try {
      // 1. Naya aur chota URL
      const url = `https://generativelanguage.googleapis.com/v1beta/interactions`;

      const promptText = `My BMI is ${bmi} and my category is ${category}. Give me exactly 2 very short, one-line health tips based on this. Do not use bold text or markdown.`;

      // 2. Naye tareeqe se fetch request
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": API_KEY // API Key ab URL ki jagah seedha header mein jayegi!
        },
        // 3. Naya Body Format (Pehle se kitna clean aur simple hai!)
        body: JSON.stringify({
          model: "gemini-3.5-flash",
          input: promptText
        })
      });

      // Error check hamesha ki tarah
      if (!response.ok) {
        throw new Error(`API Request Failed with status: ${response.status}`);
      }

      const data = await response.json();

      // 4. Naye response object se text nikalna
      // Nayi API steps mein jawab deti hai, humein 'model_output' wala step chahiye
      const outputStep = data.steps.find(step => step.type === "model_output");
      const aiTips = outputStep.content[0].text;

      // Screen par print karna
      res.innerHTML = `Your BMI is: ${bmi} <br> Category: ${category} <br><br> <div style="font-size: 18px; font-weight: normal; color: darkblue;"><b>Gemini 3.5 AI Tips:</b><br>${aiTips}</div>`;
      
    } catch (error) {
      console.error("API Error:", error);
      res.innerHTML = `Your BMI is: ${bmi} <br> Category: ${category} <br><br> <span style="font-size: 16px; color: red;">Failed to load AI tips.</span>`;
    }
    // ====================================================
    // === GEMINI API INTEGRATION END ===
  }
});