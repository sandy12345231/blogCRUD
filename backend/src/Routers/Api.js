const express = require('express');
const Routers = express.Router();
const {userCreate, userGet,userDelete,userUpdate,getById} = require('../Controller/ApiControler');



Routers.route("/users")
.get(userGet)
.post(userCreate)

Routers.route("/users/:id").delete(userDelete).patch(userUpdate).get(getById)


module.exports = Routers;



