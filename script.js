// var apiKey = "15ebf4a18b0ca6d48058464a1f64d606"
var apiKey = "df3fb9934a7d8ebae97c6749b588071a"
var searchbtn = document.querySelector("#searchbtn")
var searchinput = document.querySelector(".searchInput")
var mainWeather = document.querySelector(".mainWeather")

function searchWeather(city){
        var requesturl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

fetch(requesturl)
.then(function (response) {
    return response .json() ;
})
.then (function (data) {
console.log(data)
var iconhash = data.weather[0].icon
var url = `http://openweathermap.org/img/wn/${iconhash}.png`
var currentWeather = `
<div class = "current-weather">
<h2>${data.name}</h2>
<img src="${url}" />
<p>${data.weather[0].description}</p>
<p>temp: ${data.main.temp}</p>
<p>humidity: ${data.main.humidity}</p>
<p>windspeed: ${data.wind.speed}mph</p>
</div>
`


mainWeather.innerHTML = currentWeather
})
}



searchbtn.addEventListener("click",function(event){
event.preventDefault()
var city = searchinput.value.trim()
searchWeather(city)
})