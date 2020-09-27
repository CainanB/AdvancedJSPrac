const express = require("express");
const bodyParser = require("body-parser")
const https = require("https");


const app = express();
app.use(bodyParser.urlencoded({extended: true }))

app.get("/", (req, res) =>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=houston,texas&units=imperial&appid=949e47da5c633330a239053d53c767ee"
    https.get(url, (response) =>{
        console.log(response)
        response.on("data", function(data){
           const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            console.log(temp, description)
          
        })
    })
    res.sendFile(__dirname + "/weather.html")
})

// app.get("/", (req, res) =>{
//     res.sendFile(__dirname + "/index.html")
// })
// app.get("/bmicalculator", (req, res) =>{
//     res.sendFile(__dirname + "/bmiCalculator.html")
// })

// app.post("/", (req, res) =>{
//    const {num1, num2} = req.body
//    result = parseInt(num1) + parseInt(num2)
//    res.send(`The result of the calculation is ${result}`)
// })
// app.post("/bmicalculator", (req, res) =>{
//    let {weight, height} = req.body
//    weight = parseFloat(weight)
//    height = parseFloat(height)
//    bmi = weight / (height ** 2)
//    res.send(`Your bmi is ${bmi}`)
// })


app.listen(3000, () =>{
    console.log("server started on port 3000")
});