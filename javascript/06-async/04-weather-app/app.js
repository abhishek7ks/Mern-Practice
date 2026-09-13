 async function fetchweather() {
   
    let outputdata = document.getElementById("output");
    try{
   
    let city = document.getElementById('cityinput').value
    const apikey = "71159a79c54b5f51055d47286c5ac6a3"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`


    let response =  await fetch(url);
    let data = await response.json();
    
    outputdata.innerHTML = "City Name - " + data.name + " - " +" Temperature - " + data.main.temp;
 }

 catch( error){
    outputdata.innerHTML = " Error: " + error.message
    
}
    
}

