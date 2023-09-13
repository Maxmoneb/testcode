const apikey ="eaa11aa421b7205d022ceea31214ed65"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=thrissur";
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
var data = await response.json();
console.log(data);





// document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°c";
document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
document.querySelector(".wind").innerHTML= data.wind.speed +" Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else  if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png"
    }
    else  if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png"
    }
    else  if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else  if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png"
    }

}


checkweather();




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
