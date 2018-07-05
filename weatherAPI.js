window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const long = position.coords.longitude;
            const lat = position.coords.latitude;
            const unitSwap = true;
            const myKey = key.apiKey;

            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + myKey)
                .then(response => response.json())
                .then(data => {

                    const kelvin = data.main.temp;
                    const celsius = (kelvin - 273.15).toFixed(2) + " &#8451;";
                    const fahrenheit = (kelvin * 9 / 5 - 459.67).toFixed(2) + " &#8457;";
                    const weatherType = data.weather[0].description;
                    const city = data.name;
                    const wind = data.wind.speed + " km/h";
                    const humidity = data.main.humidity + " %";
                    const pressure = data.main.pressure + " hpa";
                    const iconCode = data.weather[0].icon;
                    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

                    document.getElementById("celsius").innerHTML = celsius;
                    document.getElementById("city").innerHTML = city;
                    document.getElementById("weatherType").innerHTML = weatherType;
                    /*document.getElementById("weatherIcon").setAttribute('src',iconURL);*/
                    document.getElementById("wind").innerHTML = wind;
                    document.getElementById("humidity").innerHTML = humidity;
                    document.getElementById("pressure").innerHTML = pressure;
                    document.title = "Weather Now - " + city;

                    document.getElementById("celsius").click(function() {
                        if (unitSwap === false) {
                            document.getElementById("celsius").innerHTML = fahrenheit;
                            unitSwap = true;
                        } else {
                            document.getElementById("celsius").innerHTML = celsius
                            unitSwap = false;
                        }
                    });
                });
        })
    }
}



// JQUERY VERSION --- USING GETJSON---------------------------------

/*$(document).ready(function() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var long = position.coords.longitude;
            var lat = position.coords.latitude;
            var unitSwap = true;
        
            const api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=' + myKey;

            $.getJSON(api, function(data) {
               
                var kelvin = data.main.temp;
                var celsius = (kelvin - 273.15).toFixed(2) + " &#8451;"; 
                var fahrenheit = (kelvin * 9/5 -459.67).toFixed(2) + " &#8457;";
                var weatherType = data.weather[0].description;  
                var city = data.name;
                var wind = data.wind.speed + " km/h";
                var humidity = data.main.humidity + " %";
                var pressure = data.main.pressure + " hpa";
                var iconCode = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            
                

                $("#celsius").html(celsius);
                $("#city").html(city);
                $("#weatherType").html(weatherType);    
                $('#weatherIcon').attr('src', iconUrl);
                $("#wind").html(wind);
                $("#humidity").html(humidity);
                $("#pressure").html(pressure);

            
                $("#celsius").click(function(){
                    if(unitSwap === false) {
                        $("#celsius").html(fahrenheit);
                       unitSwap = true;
                    }else{
                    $("#celsius").html(celsius);
                    unitSwap = false;
                    }
                $("title").html("WeatherNow " + city);
                });
            });
        });
    }    
});
*/