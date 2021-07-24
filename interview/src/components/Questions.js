import React, { useState } from 'react';
import './Questions.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";

 const questions = [
    {
       num : 1,
       ques : "Tell us a little about yourself",
    },
    {
      num : 2,
      ques : "Out of all the candidates, why should we hire you?",
   },
   {
      num : 3,
      ques : "What are your biggest weaknesses?" ,
   },
   {
      num : 4,
      ques : "What are your biggest strengths?",
   },
   {
      num : 5,
      ques : "Where do you see yourself in 5 years?",
   }];

 const display = questions.map((question) => 
 <Form className='question'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Question {question.num} </Form.Label>
                 <Form.Label>{question.ques}</Form.Label>
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Answer here</Form.Label>
                 <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>);

function Questions(){
    return(
        <div className='background'>
           {display}
            <Button className='b' type="submit">
              <a href="https://replit.com/join/lhxhuwlnfw-siddharthwala">
                Try it yourself
              </a>
          
            </Button>
        
        </div>
    )
}

export default Questions

