import React from 'react';
import './HomePageBody.css';
import { FaMobileAlt } from 'react-icons/'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



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
            To head to your login page, click the button below.
            </Card.Text>
            <Button className="btn cbutton"  variant="primary">Login Page</Button>
          </Card.Body>
        </Card>
        <Card className="card2" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="cardtitle">Interviewee</Card.Title>
            <Card.Text className="cardtext" >
            To login for your interview, click the button below.
            </Card.Text>
            <Button className="btn cbutton" variant="primary">Login Page</Button>
          </Card.Body>
        </Card>
        
        
     </div>
       
    </div>
     
        
    )
}

export default HomePageBody
