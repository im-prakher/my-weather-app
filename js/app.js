$(document).ready(
    ()=>{
const loc = new locationClass;
const wea = new weatherClass;
const ui = new UI();
loc.getLocation()
.then(data => {
    console.log(data);
    wea.getWeather(data.location.city.toLowerCase(), data.location.country_code.toLowerCase())
        .then(data => {
            console.log(data);
            console.log(data.weather.name);
            ui.updateWeather(data);
        })

})
.catch(err => console.log(err))
    }
);