const apiKey = "bf23a5608b6eedc457d8aa4cae586174"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";

//https://api.openweathermap.org/data/2.5/weather?q={jabalpur}&appid={bf23a5608b6eedc457d8aa4cae586174} 

async function checkWeather(){

    const response = await fetch(apiUrl + `&appid=&{apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();