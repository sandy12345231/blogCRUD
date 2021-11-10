const User = require('../Models/userModal');


// Post
const userCreate = async(req,res)=>{
    try{
        const createuser = new User(req.body);
        const saveData = await createuser.save();
        res.status(201).send(saveData);
    }
    catch(error){
        console.log(error.message , "Not created");
    }
}

// get
const userGet = async(req,res)=>{
    try{
        const getuser = await User.find();
        res.status(200).send(getuser);
        // fetch ka 200 status, find--> all data fetch or, for particular data name objct{name...}, limit-->
    }
    catch(error){
        console.log(error.message , "Not Geting data");
    }
}

// delete

const userDelete = async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteuser = await User.findByIdAndDelete({_id});
        
        if(!_id){
            res.status(404).send();
            
        }
        else{
            res.send(deleteuser)
            console.log("Deleted");

        }
    }
    catch(error){
        // console.log(error.message , "Not Geting data");
        res.status(500).send(error.message)
    }
}

const getById = async(req,res)=>{
    console.log(req.body);
    try {
    let id = req.params.id;
    console.log(id, "update check");
    let idUpdate = await User.findById(id);

    res.status(201).json(idUpdate);
    } catch (error) {
        console.log(error.message);
        
    }
}

const userUpdate = async(req,res)=>{
    try{

        const _id = req.params.id;

        let update = await User.find({_id});
        let updateObject = {};
        if(req.body.name){
            updateObject["name"] = req.body["name"];
        }
        if(req.body.email){
            updateObject["email"] = req.body["email"];
        }
        if(req.body.phone){
            updateObject["phone"] = req.body["phone"];
        }
        if(req.body.message){
            updateObject["message"] = req.body["message"];
        }


        update = await User.findByIdAndUpdate({_id},updateObject,{new:true});
        // new:true for instant update
        res.status(202).json(update);
        console.log(update);
    }

    catch(error){
        console.log(error.message , "Not created");
    }
}






module.exports = {userCreate, userGet, userDelete,userUpdate, getById};




