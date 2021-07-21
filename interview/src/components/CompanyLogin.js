import React, { useState } from 'react';
import './CompanyLogin.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

const CompanyLogin = () => {
  const history = useHistory();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password : ""

  });

  let name,value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
   console.log(name,value)

   setUserLogin({ ...userLogin, [name] : value});
  }
  const PostData = async (e) => {
    e.preventDefault();
   const {name, email, password, confirmPass} = userLogin;
    const res = await fetch("http://localhost:5000/api/v1/users/login/",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,email,password,confirmPass 
      })
   
    });
   
    const data = await res.json();
   
    if(data.status === 422 || !data) {
      window.alert("Invalid Credentials");
      console.log("Unsuccessful");
    }
    else if (data.status === 401 || data.status === 500){
     window.alert("Not Registered!");
     console.log("Unsuccessful");
     history.push("/companysignup");
   
    }
    else
    {
     window.alert("Successful Login");
     console.log("Successful");
     history.push("/companysignup");
    }
   }
   


    return (
        <div class='r'>
        
        <Form className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>WELCOME TO COMPANY LOGIN</p>
        <p className='intro col-lg-12'>You can set your own questions for the interviewees!!!</p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="formBasicEmail" className='email col-lg-12'>
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="off" value={userLogin.email} onChange={handleInput} 
          name = "email" id="email"/>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Enter password" autoComplete="off" value={userLogin.password} onChange={handleInput} 
          name = "password" id="password"/>
        </Form.Group>
       <br /> <br /> <br />
        <Button className='b' type="submit" onClick={PostData}>
          <Link to="/loginenter"> 
            SUBMIT
          </Link>
          
        </Button>
        </Form.Group>
      </Form>
      </div>
    )
    }

export default CompanyLogin
