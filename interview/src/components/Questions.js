import React, { useState } from 'react';
import './Questions.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import e from 'cors';


function Questions(){

  const questions=[
         "Tell us a little about yourself",
         "Out of all the candidates, why should we hire you?",
         "What are your biggest weaknesses?" ,
         "What are your biggest strengths?",
         "Where do you see yourself in 5 years?",
   ];

 
 const [customques, setCustomques] = useState(questions);

 function handleClick(e){
    e.preventDefault();
    const newques = document.getElementById('custom-input').value
    setCustomques([...customques, newques]);
 };

 const display = customques.map((question) => 
 <Form className='question'>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Question {customques.indexOf(question) + 1} ) </Form.Label>
          <Form.Label>{question}</Form.Label>
              
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Answer here</Form.Label>
          <Form.Control as="textarea" rows={5} />
          <Button className="buttons">submit</Button>
       </Form.Group>
    </Form>
);

   return(
      <div className='background'>
        {display}
        <div className="question">
          <h5>Add your custom question</h5>
          <input id="custom-input" type="text"></input>
          <Button className="buttons custom-button" onClick={handleClick}>
            Add
          </Button>
        </div>
        
      </div>
    )
}

export default Questions

