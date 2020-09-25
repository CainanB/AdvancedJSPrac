const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) =>{
    res.send("thanks!")
})


app.listen(3000, () =>{
    console.log("server started on port 3000")
});