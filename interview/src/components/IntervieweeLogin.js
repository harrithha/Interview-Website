import React, { useState } from 'react';
import './IntervieweeLogin.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const IntervieweeLogin = () => {
  
  const history = useHistory();
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
    console.log(data)

   
    if(data.status === "error" || data.status === "fail") {
      if(data.error.statusCode === 422 || !data)
      {
       window.alert("Invalid Credentials");
       console.log("Unsuccessful");
   
      }
      else if(data.error.statusCode === 401 || data.error.statusCode === 400 )
      {
       window.alert(data.message);
       console.log("Unsuccessful");
       history.push("/companylogin");
   
      }
      else if(data.error.statusCode === 500)
      {
       window.alert("Company Not Registered!");
       console.log("Unsuccessful");
       history.push("/companysignup");
   
      }
     }
     else
     {
       window.alert("Successful Login");
       console.log("Successful");
       history.push("/loginenter");
     }
   
   };
   
   
   


    return (
        <div class='r'>
        
        <Form className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>WELCOME TO INTERVIEWEE LOGIN</p>
        <p className='intro col-lg-12'></p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="formBasicEmail" className='email col-lg-4'>
          <Form.Label className='aligning'>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="off" value={intervieweeLogin.intemail} onChange={handleInput} 
          name = "intemail" id="intemail"/>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword" className='password col-lg-4'>
          <Form.Label className='aligning'>PASSWORD</Form.Label>
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
