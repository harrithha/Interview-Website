import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const SetInterviewee = () => {
  
  const history = useHistory();
  const [intervieweeSignUp, setintervieweeSignUp] = useState({
    intname: "",
    intemail: "",
    intpassword : "",
    intconfirmPass: ""

  });

  let intname,intvalue;
  const handleInput = (e) => {
    intname = e.target.name;
    intvalue = e.target.value;
   console.log(intname,intvalue)

   setintervieweeSignUp({ ...intervieweeSignUp, [intname] : intvalue});
  }


const PostData = async (e) => {
 e.preventDefault();
const {intname, intemail, intpassword, intconfirmPass} = intervieweeSignUp;
 const res = await fetch("http://localhost:5000/api/v1/int/signup",{
   method : "POST",
   headers : {
     "Content-Type" : "application/json"
   },
   body : JSON.stringify({
     intname,intemail,intpassword,intconfirmPass 
   })

 });

 const data = await res.json();
 console.log(data)
 if(data.status === "error" || data.status === "fail") {
  if(data.error.statusCode === 422 || !data)
  {
   window.alert("Invalid Credentials : "  + window.alert(data.message));
   console.log("Unsuccessful");

  }
  else if(data.error.statusCode === 401 || data.error.statusCode === 500 || data.error.statusCode === 400)
  {
   window.alert(data.message);
   window.alert("Not Registered");
   console.log("Unsuccessful");

  }
 }
 else
 {
   window.alert("Successful Signup");
   console.log("Successful");
   history.push("/companylogin");
 }

};



    return (
        <div class='r'>
        
        <Form method = "POST" className='login col-lg-12'>
        
        <p className='welcome col-lg-12'>CREATE INTERVIEWEE CREDENTIALS</p>
        <p className='intro col-lg-12'>Create an account for interviewees!!</p>
        
        <Form.Group className='hi'>
        <Form.Group controlId="" className='email col-lg-12'>
          <Form.Label>NAME</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" autoComplete="off" value={intervieweeSignUp.intname} onChange={handleInput} 
          name = "intname" id="intname"/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className='email col-lg-12'>
          <Form.Label>USERNAME</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="off" value={intervieweeSignUp.intemail}  onChange={handleInput} 
          name = "intemail" id="intemail"/>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Enter password" autoComplete="off" value={intervieweeSignUp.intpass} onChange={handleInput} 
          name = "intpassword" id="intpassword"/>
        </Form.Group>
        <br /> <br />
        <Form.Group controlId="formBasicPassword" className='password col-lg-12'>
          <Form.Label>CONFIRM PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" autoComplete="off" value={intervieweeSignUp.intconfirmPass} onChange={handleInput} 
          name = "intconfirmPass" id="intconfirmPass"/>
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

export default SetInterviewee
