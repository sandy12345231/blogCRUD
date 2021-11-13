const express = require("express");
const mongoose = require("mongoose");
require("./src/database/db");
const Routers = require('./src/Routers/Api');
const cors = require("cors");
// deploy
const path = require('path');
require("./src/database/db");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api" , Routers);


const PORT = process.env.Port || 3000;
if(process.env.NODE_ENV === 'producation'){
    app.use(express.static('client/build'));
}
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT,()=>{
    console.log("Server connected in 3000 port");
})

// app.listen(3000, ()=>{
//     console.log("Server connected in 3000 port");
// });
