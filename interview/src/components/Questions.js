import React, { useState } from 'react';
import './Questions.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


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
  const res = await fetch("http://localhost:5000/api/v1/users/answers",{
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

  
 const [customques, setCustomques] = useState(questions);

 function handleClick(e){
    e.preventDefault();
    const newques = document.getElementById('custom-input').value
    setCustomques([...customques, newques]);
 };

 const display = customques.map((question) => 
 <Form className='question'>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Control value={ans.answer} onChange={handleInput} />
       
          <Form.Label>Question {customques.indexOf(question) + 1} ) </Form.Label>
          <Form.Label>{question}</Form.Label>
              
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Answer here</Form.Label>
          <Form.Control as="textarea" rows={5} />
          <Button className="btn" onClick={PostData}>submit</Button>
       </Form.Group>
    </Form>
);

   return(
      <div className='background'>
        {display}
        <input id="custom-input" type="text" ></input>
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

}
export default Questions

