import React from 'react';
import './HomePageBody.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function HomePageBody() {


    return (
    <div className={'home'}>
  

     <div class="webname">
        <h1 class="header">Welcome to SyneView</h1> 
        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className="card2" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        
        
     </div>
       
    </div>
     
        
    )
}

export default HomePageBody
