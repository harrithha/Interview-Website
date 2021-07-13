import React from 'react';
import './CompanySignup.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const name = ''
const email = ''
const password = ''
const passwordConfirm = ''


const PostData = async (e) => {
 e.preventDefault();
const history = useHistory()
// const {name, email, password, passwordConfirm} = user;
 const res = await fetch("/api/v1/users/signup",{
   method : "POST",
   headers : {
     "Content-Type" : "application/json"
   },
   body : JSON.stringify({
     name,email,password,passwordConfirm
   })

 });

 const data = await res.json();

 if(data.status === 422 || !data) {
   window.alert("Invalid Registration");
   console.log("Unsuccessful");
 }
 else{
  window.alert("Valid Registration");
  console.log("Successful");

  history.pushState("")
 }
}


function CompanySignup() {
    return (
        <div class='r'>
        
        <Form method = "POST" className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>WELCOME TO COMPANY SIGNUP</p>
        <p className='intro col-lg-12'>Create an account which will enable you to set questions for interviewees!!</p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="" className='email col-lg-12'>
          <Form.Label>NAME</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className='email col-lg-12'>
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
        <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
       </Form.Group>
       <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
         <br /> <br />
        <Form.Label>CONFIRM PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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

export default CompanySignup
