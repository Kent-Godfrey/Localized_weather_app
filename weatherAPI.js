$(document).ready(function() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var long = position.coords.longitude;
            var lat = position.coords.latitude;
            var unitSwap = true;
        
            const api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=<YOUR_OPENWEATHER_API_KEY';

            $.getJSON(api, function(data) {
               
                var kelvin = data.main.temp;
                var celsius = (kelvin - 273.15).toFixed(2) + " &#8451;"; 
                var fahrenheit = (kelvin * 9/5 -459.67).toFixed(2) + " &#8457;";
                var weatherType = data.weather[0].description;  
                var city = data.name;
                var wind = data.wind.speed + "km/h";
                var humidity = data.main.humidity + "%";
                var pressure = data.main.pressure + "hpa";
                var iconCode = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
            
                $("#celsius").html(celsius);
                $("#city").html(city);
                $("title").html(city);
                $("#weatherType").html(weatherType);    
                $('#weatherIcon').attr('src', iconUrl);
                $("#wind").html(wind);
            
                $("#celsius").click(function(){
                    if(unitSwap === false) {
                        $("#celsius").html(fahrenheit);
                       unitSwap = true;
                    }else{
                    $("#celsius").html(celsius);
                    unitSwap = false;
                    }
                });
            });
        });
    }    
});