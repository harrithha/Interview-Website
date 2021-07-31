import React, { useState } from 'react';
import './Questions.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import e from 'cors';


const Questions = () => {

  const questions=[
         "Tell us a little about yourself",
         "Out of all the candidates, why should we hire you?",
         "What are your biggest weaknesses?" ,
         "What are your biggest strengths?",
         "Where do you see yourself in 5 years?",
   ];

   const i = 0;
   const [ans, setans] = useState({
     answer : ""
 
   });
 
   let name,value;
   const handleInput = (e) => {
     name = e.target.answer;
     value = e.target.value;
    console.log(name,value)
 
    setans({ ...ans, [name] : value});
   }
   const PostData = async (e) => {
      e.preventDefault();
     const {answer} = ans;
      const res = await fetch("http://localhost:5000/api/v1/ans/answers",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          answer
        })
     
      });
     
      const data = await res.json();
      console.log(data)
   }
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
          <Form.Control type="text" rows={5} placeholder="Enter Answer" autoComplete="off" value={ans.answer} onChange={handleInput} 
          name = "text" id="text"/>
          <Button className="buttons" onClick={PostData}>submit</Button> 
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