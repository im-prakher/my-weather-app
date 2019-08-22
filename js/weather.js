class weatherClass {

    async getWeather(city, country) {
        const weatherResp = await fetch(`https://openweathermap.org/data/2.5/weather?q=${city},${country}&appid=b6907d289e10d714a6e88b30761fae22`)

        const weatherData = await weatherResp.json();

        return {
            weather: weatherData
        }

    }
}