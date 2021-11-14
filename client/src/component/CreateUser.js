import {axiosInstance} from '../config';
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";


function CreateUser() {

    let history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const sendData = {
        name: name,
        email:email,
        phone:phone,
        message:message

    }

    const create = async()=>{

        try {

            const createBlog = await axiosInstance.post('https://locolhost:3000/api/users', sendData);
            console.log(createBlog.data);
            // alert(createBlog.data);
            history.push('/');

        } catch (error) {
            console.log(error.message);
            
        }

    }


    return (
        <React.Fragment>

<div class="container">
<div class="table-title">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>Blog <b>Create</b></h2>
                    </div>
                   
                </div>
            </div>
<form>

  <div class="form-group">
    <label for="NameDemo">Your Name:</label>
    <input type="text" class="form-control"  value={name} onChange={(e)=>{setName(e.target.value)}} id="NameDemo" aria-describedby="nameHelp" placeholder="Please enter your full name"/>
    </div>
  <div class="form-group">
    <label for="EmailDemo">Your Email:</label>
    <input type="email" class="form-control" id="EmailDemo" value={email} onChange={(e)=>{setEmail(e.target.value)}} aria-describedby="emailHelp" placeholder="Please enter your primary email, we will send confirmation email!"/>
    </div>
  <div class="form-group">
    <label for="passDemo">Enter Phone Number:</label>
    <input type="text" class="form-control" id="passDemo" value={phone} onChange={(e)=>{setPhone(e.target.value)}} aria-describedby="passHelp" placeholder="Please enter your mobile number"/>
    </div>
  <div class="form-group">
    <label for="passDemo">Enter Your Message:</label>
    <textarea  type="text" class="form-control" id="msgDemo" value={message} onChange={(e)=>{setMessage(e.target.value)}} aria-describedby="msgHelp" placeholder="Please enter your messages"/>
  </div>
  <button type="button" class="btn btn-success" onClick={create}>Create Blog</button>
</form>
</div>
            
        </React.Fragment>
    )
}

export default CreateUser
