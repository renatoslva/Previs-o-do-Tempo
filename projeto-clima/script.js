const key = "e65da520adb62717911abdbe5fd3f5fd"

function dataonscreen(data){
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor (data.main.temp) + " °c"
    document.querySelector(".prediction-text").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade do Ar " + data.main.humidity + "%"
    document.querySelector(".forecast-image").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}


 async function searchcity (input){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric `).then(response => response.json())

    dataonscreen(data)
    
        
    }


function Clickonthebutton(){
    const input = document.querySelector(".input-city").value
   
    searchcity(input)

   
}
//https://openweathermap.org/img/wn/04n.png