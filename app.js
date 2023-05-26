const btn = document.getElementById("btn")
const inpt = document.getElementById("inputt")

let getData = () =>{
    const inputt = document.getElementById("inputt").value
    const screen = document.getElementById("screen")
    const screen1 = document.getElementById("screen1")
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+`${inputt}`+"&appid=e6d52e0c69514d8b5aea654b1fd7d9f1&units=metric"
        ).then((response) =>{
            return response.json()
        }).then((data) =>{
           screen.innerHTML = inputt + " Temperature: " + data.main.temp + "C"
           screen1.innerHTML = "There is a "+ data.weather[0].description + " " + " in " + inputt + " presently"
        }).catch((err) =>{
        console.log(err)
    })
}


btn.addEventListener("click", getData)
inpt.addEventListener("change", getData)


