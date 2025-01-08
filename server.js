const express = require("express");
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 5000;

// middleware
app.set("view engine","ejs")


app.get("/",(req,res)=>{
    res.render("index")
})


app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
})