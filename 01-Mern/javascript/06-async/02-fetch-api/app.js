

function fetchdata(){
    let outputdata = document.getElementById("output")
    fetch('https://official-joke-api.appspot.com/random_joke')

    .then(abhishek => abhishek.json())
        .then(data => outputdata.innerHTML = data.setup + " - " + data.punchline)
}






