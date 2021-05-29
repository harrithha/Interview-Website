import React from 'react';
import './CompanyLogin.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function CompanySignup() {
    return (
        <div class='r'>
        
        <Form className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>WELCOME TO COMPANY SIGNUP</p>
        <p className='intro col-lg-12'>Create an account which will enable you to set questions for interviewees!!</p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="formBasicEmail" className='email col-lg-12'>
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
        <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
         <br /> <br />
        <Form.Label>CONFIRM PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Password" />
       </Form.Group>
       <br /> <br />
        <Button className='b' type="submit">
          SUBMIT
        </Button>
        </Form.Group>
      </Form>
      </div>
    )
}

export default CompanySignup
