import React , {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

console.log("1");

function UpdateUser() {
console.log("2");


    let {id} = useParams();
    console.log(id , "qwertyuio");
    let history = useHistory();
    const [name, setNames] = useState("");
    const [email, setEmails] = useState("");
    const [phone, setPhones] = useState("");
    const [message, setMessages] = useState("");


    useEffect(() => {
    console.log("3");
   
    let fetchUpdate = async(id)=>{
        console.log("4");
        let idUpdate = await axios.get(`https://omnificrud.herokuapp.com/api/users/${id}`);
        console.log(idUpdate.data.name, "we we");
    
        setNames(idUpdate.data.name);
        setEmails(idUpdate.data.email);
        setPhones(idUpdate.data.phone);
        setMessages(idUpdate.data.message);
    }
    fetchUpdate(id);
    console.log("5");
}, [id]);

console.log("6");

const updateData = {
    name: name,
    email:email,
    phone:phone,
    message:message

}

  const update = async(id)=>{
    console.log("7");
        try {

            const updateBlog = await axios.patch(`https://omnificrud.herokuapp.com/api/users/${id}`, updateData);
            console.log(updateBlog.data);
            // alert(createBlog.data);
            history.push('/');

        } catch (error) {
            console.log(error.message);
            
        }

    }
console.log("8");

    return (
        <React.Fragment>

<div class="container">
<div class="table-title">
                <div class="row">
                    <div class="col-sm-4">
                        <h2>Blog <b>Update</b></h2>
                    </div>
                   
                </div>
            </div>
<form>

  <div class="form-group">
    <label for="NameDemo">Your Name:</label>
    <input type="text" class="form-control" id="NameDemo" value={name} onChange={(e)=>{setNames(e.target.value)}} aria-describedby="nameHelp" placeholder="Please enter your full name"/>
    </div>
  <div class="form-group">
    <label for="EmailDemo">Your Email:</label>
    <input type="email" class="form-control" id="EmailDemo" value={email} onChange={(e)=>{setEmails(e.target.value)}} aria-describedby="emailHelp" placeholder="Please enter your primary email, we will send confirmation email!"/>
    </div>
  <div class="form-group">
    <label for="passDemo">Enter Phone Number:</label>
    <input type="text" class="form-control" id="passDemo" value={phone} onChange={(e)=>{setPhones(e.target.value)}} aria-describedby="passHelp" placeholder="Please enter your mobile number"/>
    </div>
  <div class="form-group">
    <label for="passDemo">Enter Your Message:</label>
    <textarea  type="text" class="form-control" id="msgDemo" value={message} onChange={(e)=>{setMessages(e.target.value)}}  aria-describedby="msgHelp" placeholder="Please enter your messages"/>
  </div>
  <button type="button" class="btn btn-success" onClick={()=>{
      update(id)
  }}>Update Blog</button>
</form>
</div>
            
        </React.Fragment>
    )
}

export default UpdateUser
