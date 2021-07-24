import React, { useState } from 'react';
import './CompanySignup.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import{name,email} from './CompanyLogin'

const UpdateDetails = () => {
  const history = useHistory();
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password : "",
    confirmPass: ""

  });

  let name,value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
   console.log(name,value)

   setUserSignUp({ ...userSignUp, [name] : value});
  }


const PostData = async (e) => {
 e.preventDefault();
const {name, email, password, confirmPass} = userSignUp;
 const res = await fetch("http://localhost:5000/api/v1/users/updateMe",{
   method : "PATCH",
   headers : {
     "Content-Type" : "application/json"
   },
   body : JSON.stringify({
     name,email,password,confirmPass 
   })

 });

 const data = await res.json();
 console.log(data)
 if(data.status === "error" || data.status === "fail") {
   if(data.error.statusCode === 422 || !data)
   {
    window.alert("Invalid Credentials : "  + window.alert(data.message));
    console.log("Unsuccessful");

   }
   else if(data.error.statusCode === 401 || data.error.statusCode === 400 || data.error.statusCode === 500)
   {
    window.alert(data.message);
    window.alert("Unsuccessful");
    console.log("Unsuccessful");

   }
  }
  else
  {
    window.alert("Successfully Updated Details");
    console.log("Successful");
    history.push("/loginenter");
  }

};



    return (
      
        <div class='r'>
        
        <Form method = "POST" className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>UPDATE DETAILS</p>
        <p className='intro col-lg-12'>Edit the below fields to Update!</p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="" className='email col-lg-12'>
          <Form.Label>NAME</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" autoComplete="off" value={userSignUp.name} onChange={handleInput} 
          name = "name" id="name" defaultValue = "Hello"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className='email col-lg-12'>
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="off" value={userSignUp.email} onChange={handleInput} 
          name = "email" id="email" defaultValue = "Hello"/>
        </Form.Group>

       <br /> <br />  
        <Button className='b' type="submit" onClick={PostData}>
            SUBMIT
        </Button>
        </Form.Group>
    </Form>

    </div>
    
    
    )
    }
export default UpdateDetails
