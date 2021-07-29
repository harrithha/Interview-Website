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
          <Button className="btn">submit</Button>
       </Form.Group>
    </Form>
);

   return(
      <div className='background'>
        {display}
        <input id="custom-input" type="text"></input>
        <button className="add-button" onClick={handleClick}>
          Add
        </button>
        {/* {display_new} */}
        
        <Button className='b' type="submit">
         <a href="https://replit.com/join/lhxhuwlnfw-siddharthwala">
            Try it yourself
         </a>
          
        </Button>
        
      </div>
    )
}

export default Questions

