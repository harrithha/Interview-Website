import React from 'react';
import './IntervieweeLogin.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function IntervieweeLogin() {
    return (
        <div class='r'>
        
        
        <Form className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>WELCOME TO INTERVIEWEE LOGIN</p>
        <p className='intro col-lg-12'>All the best for your Interview! Stay Calm!</p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="formBasicEmail" className='email col-lg-12'>
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
        <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Password" />
       </Form.Group>
        <Button className='b' type="submit">
          SUBMIT
        </Button>
        </Form.Group>
      </Form>
      </div>
    )
}

export default IntervieweeLogin
