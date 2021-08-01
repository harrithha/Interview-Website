import React from 'react';
import './HomePageBody.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CompanySignup from './CompanySignup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function HomePageBody() {


    return (
    <div className={'home'}>
  

     <div class="webname">
        <h1 class="header">Welcome</h1>
        <h1 class="header">to</h1>
        <h1 class="header">Syneview</h1> 
        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="cardtitle">Company</Card.Title>
            <Card.Text className="cardtext">
            To sign up or login as company, click the button below.
            </Card.Text>
            <Link to = "/companysignup">
              <Button className="cbutton1">
                 SignUp page
              </Button>
            </Link>
            <Link to = "/companyslogin">
              <Button className="cbutton2">
                 Login
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className="card2" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="cardtitle">Interviewee</Card.Title>
            <Card.Text className="cardtext" >
            To login for your interview, click the button below.
            </Card.Text>
            <Link to = "/intervieweelogin">
              <Button className="cbutton3">
                 Login
              </Button>
            </Link>
          </Card.Body>
        </Card>
        
        
     </div>
     </div>
     
        
    )
}

export default HomePageBody
