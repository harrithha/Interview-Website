import React, { useState } from 'react';
import './IntervieweeLogin.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const IntervieweeLogin = () => {
  const [intervieweeLogin, setIntervieweeLogin] = useState({
    intemail: "",
    intpassword : ""

  });

  let intname,intvalue;
  const handleInput = (e) => {
    intname = e.target.name;
    intvalue = e.target.value;
   console.log(intname,intvalue)

   setIntervieweeLogin({ ...intervieweeLogin, [intname] : intvalue});
  }
  const PostData = async (e) => {
    e.preventDefault();
   const {intname, intemail, intpassword, intconfirmPass} = IntervieweeLogin;
    const res = await fetch("http://localhost:5000/api/v1/int/login",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        intname, intemail, intpassword, intconfirmPass 
      })
   
    });
   
    const data = await res.json();
   
    if(data.status === 422 || !data) {
      window.alert("Invalid Credentials! Please contact Company!");
      console.log("Unsuccessful");
    }
    else{
     window.alert("Valid Login");
     console.log("Successful");
   
    }
   }
   


    return (
        <div class='r'>
        
        <Form className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>WELCOME TO INTERVIEWEE LOGIN</p>
        <p className='intro col-lg-12'></p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="formBasicEmail" className='email col-lg-12'>
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="off" value={intervieweeLogin.intemail} onChange={handleInput} 
          name = "intemail" id="intemail"/>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Enter password" autoComplete="off" value={intervieweeLogin.intpassword} onChange={handleInput} 
          name = "intpassword" id="intpassword"/>
        </Form.Group>
       <br /> <br /> <br />
        <Button className='b' type="submit" onClick={PostData}>
          SUBMIT
        </Button>
        </Form.Group>
      </Form>
      </div>
    )
    }

export default IntervieweeLogin
