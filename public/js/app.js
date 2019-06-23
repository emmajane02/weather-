window.onload = function(){

  var cityInput = document.getElementById("cityInput");
  var button = document.getElementById("button")

  cityInput.addEventListener("keydown", function(e){
    if (e.keyCode === 13) {
      makeRequest();
    }
  })

  button.addEventListener("click", makeRequest)

}

function makeRequest() {

  var cityInput = document.getElementById("cityInput");

  var button = document.getElementById("button")
  var apiKey = "92523673b062bbdcb4bddc4d19ac7a6c"

    var city = cityInput.value;

    var weathermain = document.getElementById("weathermain")
    var weatherdescription = document.getElementById("weatherdescription")
    var weathertemp = document.getElementById("weathertemp")
    var weatherhumidity = document.getElementById("weatherhumidity")
    var weatherimage = document.getElementById("weatherimage")

    var xhr = new XMLHttpRequest ();
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&APPID=92523673b062bbdcb4bddc4d19ac7a6c", true);
    xhr.onload = function (e){
      if(xhr.readyState === 4){
        if(xhr.status === 200){

          var data = JSON.parse(xhr.responseText);
          weathermain.innerHTML = data.weather[0].main
          weatherdescription.innerHTML = data.weather[0].description
          weathertemp.innerHTML = (data.main.temp - 273.15).toFixed() + "˚C"
          weatherhumidity.innerHTML = "Humidty = " + (data.main.humidity) + "%"

          if (data.weather[0].main === "Clear") {
            weatherimage.src="../../assets/images/clear.png"
          }
          if (data.weather[0].main === "Clouds") {
            weatherimage.src="../../assets/images/clouds.png"
          }
          if (data.weather[0].main === "Rain") {
            weatherimage.src="../../assets/images/rain.png"
          }
          if (data.weather[0].main === "Drizzle") {
            weatherimage.src="../../assets/images/rain.png"
          }
          if (data.weather[0].main === "Snow") {
            weatherimage.src="../../assets/images/snowflake.png"
          }

        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e){
      console.error(xhr.statusText);
    };
    xhr.send(null)
}
