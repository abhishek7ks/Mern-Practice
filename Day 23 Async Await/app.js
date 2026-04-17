async function fetchdata() {
  let response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
  );
  let data = await response.json();
  let outputdata = document.getElementById("output");
  outputdata.innerHTML = data.setup + " - " + data.punchline;
}
