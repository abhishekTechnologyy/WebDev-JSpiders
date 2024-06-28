let searchValue = document.getElementById('searchValue')
let temperature = document.getElementById('temperature')
let cityName = document.getElementById('cityName')
let countryName = document.getElementById('countryName')
let detail = document.getElementsByClassName("detail")


let search = async() =>
{
    if(searchValue.value.length == 0)
    {
        alert('please enter city name before search')
    }
    else
    {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json()
        
        detail.textContent = data.main.temp;
        detail[0].textContent = data.main.temp_max;
        detail[1].textContent = data.main.temp_min;
        detail[2].textContent = data.main.pressure;
        detail[3].textContent = data.main.humidity;

        temperature.textContent = data.main.temp
        cityName.textContent = data.name
        countryName.textContent = data.sys.country



        if(data.main.temp > 30)
        {
            document.body.style.backgroundImage = "url('hotDay.webp')"
        }
        else if(data.main.temp >= 20 && data.main.temp < 30)
        {
            document.body.style.backgroundImage = "url('clearSky image.jpeg')"

        }
        else if(data.main.temp >= 10 && data.main.temp < 20)
        {
            document.body.style.backgroundImage = "url('breeze.jpeg')"

        }
        else
        {
            document.body.style.backgroundImage = "url('freeze.jpeg')"

        }
    }
}
