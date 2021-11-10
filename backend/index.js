const express = require("express");
const mongoose = require("mongoose");
require("./src/database/db");
const Routers = require('./src/Routers/Api');
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api" , Routers);





app.listen(3000, ()=>{
    console.log("Server connected in 3000 port");
});
