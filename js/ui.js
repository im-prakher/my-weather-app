class UI {
    constructor() {
        this.outDiv = document.getElementById('outputDIV');

    }
    
    updateWeather(data) {
            var icon='';
            if(data.weather.weather[0].main=='Haze')
                icon='fas fa-cloud';
            if(data.weather.weather[0].main=='Clear')
                icon= 'fas fa-sun';
            if(data.weather.weather[0].main=='Rain')
                icon='fas fa-cloud-showers-heavy';
            if(data.weather.weather[0].main=='Snow')
                icon= 'far fa-snowflake';  
            if(data.weather.weather[0].main=='Mist')
                icon= 'fas fa-smog';        

        console.log(data.weather.name,icon);
        var output = ``;
        output += `
        <h1 class="text-dark" id="w-location">${data.weather.name}</h1>
        <h3 class="text-dark mb-3" id="w-desc">${data.weather.weather[0].main}</h3>
        <i class="${icon}"></i><br>
        <div class=" list-group">
            <div class="list-group-item"><b>Temperature</b>: ${data.weather.main.temp} C </div>
            <div class="list-group-item"><b>Max Temperature:</b> ${data.weather.main.temp_max} C</div>
            <div class="list-group-item"><b>Min Temperature:</b> ${data.weather.main.temp_min} C</div>
            <div class="list-group-item"><b>Humidity(in %)</b>: ${data.weather.main.humidity}</div>
            <div class="list-group-item"><b>Pressure:</b> ${data.weather.main.pressure} Pa</div>
            <div class="list-group-item"><b>Wind Speed</b>: ${data.weather.wind.speed}</div>
            
        </div>`;

        this.outDiv.innerHTML = output;
        

    }
    
}