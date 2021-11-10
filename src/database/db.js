const mongoose = require('mongoose');


const dataBaseConnection = async()=>{
try{
 await mongoose.connect("mongodb+srv://mernecom:mernecom@cluster0.wtjik.mongodb.net/mernecom?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
 console.log("Database is connected");
}
catch(error){
    console.log(error.message);
}
}
dataBaseConnection();
