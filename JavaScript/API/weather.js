let input = document.getElementById('input')
let temp = document.getElementById('temp')
let city = document.getElementById('city')
let country = document.getElementById('country')
let page = document.getElementById('page')
let feels_like = document.getElementById('feels-like')
let precipitation = document.getElementById('precipitation')
let visibility = document.getElementById('visibility')
let humidity = document.getElementById('humidity')

let search = async() => {
    if(input.value.length == 0){
        alert("Enter a city first");
    }
    let url = (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
    let response = await fetch(url)
    let data = await response.json()
    temp.textContent = data.main.temp
    console.log(data.main.temp);
    city.textContent = data.name
    country.textContent = data.sys.country
    feels_like.textContent = data.main.temp_max
    precipitation.textContent = data.main.temp_min
    visibility.textContent = data.visibility
    humidity.textContent = data.main.humidity+'%'
    if(data.main.temp > 30){
        page.style.backgroundImage = "url('hotDay.webp')"
    }
    else if(data.main.temp > 20 && data.main.temp < 30){
        page.style.backgroundImage = "url('clearSky image.jpeg')"
    }
    else if(data.main.temp > 10 && data.main.temp < 20){
        page.style.backgroundImage = "url('breeze.jpeg')"
    }
    else{
        page.style.backgroundImage = "url('freeze.jpeg')"
    }
}