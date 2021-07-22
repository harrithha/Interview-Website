import React, { useState } from 'react';
import './Questions.css';
import {Form} from 'react-bootstrap';

function Questions(){
    return(
        <div className='background'>
            <Form className='question'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Question 1) </Form.Label>
                 <Form.Label>Tell us a little about yourself</Form.Label>
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Answer here</Form.Label>
                 <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
            <Form className='question'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Question 2) </Form.Label>
                 <Form.Label>Out of all the candidates, why should we hire you?</Form.Label>
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Answer here</Form.Label>
                 <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
            <Form className='question'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Question 3) </Form.Label>
                 <Form.Label> What are your biggest weaknesses?</Form.Label>
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Answer here</Form.Label>
                 <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
            <Form className='question'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Question 4) </Form.Label>
                 <Form.Label> What are your biggest strengths?</Form.Label>
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Answer here</Form.Label>
                 <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
            <Form className='question'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Question 5) </Form.Label>
                 <Form.Label> Where do you see yourself in 5 years?</Form.Label>
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Answer here</Form.Label>
                 <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
            <Button className='b' type="submit">
              <a href="https://replit.com/join/lhxhuwlnfw-siddharthwala">
                Try it yourself
              </a>
          
            </Button>
        
        </div>
    )
}

export default Questions

