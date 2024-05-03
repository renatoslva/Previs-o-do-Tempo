const key = "e65da520adb62717911abdbe5fd3f5fd"


 async function searchcity (input){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br `).then(response => response.json())

       console.log (dados)
}

function Clickonthebutton(){
    const input = document.querySelector(".input-city").value
   
    searchcity(input)

   
}