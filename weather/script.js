// API , napojeni API , zadani mesta

function getWeather() {

    const apiKey = '64f60853740a1ee3ba20d0fb595c97d5';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter place');
        return; 
    }

    document.getElementById('city').value = '';

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })

}

// zobrazeni hodnot

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const cityInfo = document.getElementById('city-info');

    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
    cityInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
       
        const temperatureHTML = `<p>${temperature}°C</p>`;
        const weatherHtml = `<p>${description}</p>`;
        const cityHtml = `<p>${cityName}</p>`;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        cityInfo.innerHTML = cityHtml; 
    }
}







