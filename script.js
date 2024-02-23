
 window.addEventListener("load",()=>{
    let lon;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lon= position.coords.longitude;
            lat = position.coords.latitude;
           // api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=751b21fcf116fd4e21c1cfc788d5c754`
            const proxy ="https://api.openweathermap.org/data/2.5/weather";
            let apikey ="751b21fcf116fd4e21c1cfc788d5c754"
            https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
           var url = `${proxy}?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
            fetch(url).then((response)=>{
                return response.json();

            })
            .then((data)=>{
                console.log(data);
                document.getElementById("pid").innerHTML= data.name;
                document.getElementById("temp").innerHTML= data.main.temp;
                document.getElementById("p2id").innerHTML= data.weather[0].main;
                document.getElementById("windspeed").innerHTML= data.wind.speed;
            })
})
 }
})