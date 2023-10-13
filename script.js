
const apiKey = "bf23a5608b6eedc457d8aa4cae586174"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
   
    
    if(data.weather[0].main == "clouds"){

        weatherIcon.src = "clouds.png"

    }

     else if(data.weather[0].main == "clear"){

        weatherIcon.src = "clear.png"

    }

    else if(data.weather[0].main == "drizzle"){

        weatherIcon.src = "drizzle.png"

    }

    else if(data.weather[0].main == "mist"){

        weatherIcon.src = "mist.png"

    }

    else if(data.weather[0].main == "rain"){

        weatherIcon.src = "rain.png"

    }

    
     document.querySelector(".weather").style.display = "block";   
}

checkWeather();
searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
});

