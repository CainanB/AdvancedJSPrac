const express = require("express");
const bodyParser = require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true }))

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/bmicalculator", (req, res) =>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", (req, res) =>{
   const {num1, num2} = req.body
   result = parseInt(num1) + parseInt(num2)
   res.send(`The result of the calculation is ${result}`)
})
app.post("/bmicalculator", (req, res) =>{
   let {weight, height} = req.body
   weight = parseInt(weight)
   height = parseInt(height)
   bmi = weight / (height ** 2)
   res.send(`Your bmi is ${bmi}`)
})


app.listen(3000, () =>{
    console.log("server started on port 3000")
});