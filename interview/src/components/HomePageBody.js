import React from 'react';
import './HomePageBody.css';
import Button from "@material-ui/core/Button";
import {Card} from 'react-bootstrap';



function HomePageBody() {
const cardInfo = [
    { image:"/images/Interviwee.jpg"  , title:"" , text:"INTERVIWEE LOGIN" } ,
    { image:"/images/Comp.jpg" , title:"" , text:"COMPANY LOGIN" } ,
];


const renderCard = (card, index) => {
    return(
        <div className='Card'>
        <Card style={{ width: '18rem', bgcolor: 'brown' }} key={index}>
        <Card.Img variant="top" src={card.image} height="200px" width="300px" />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
         <div className='button'>
          <Button variant="dark">{card.text}</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    )
}

    return (
    <div className={'home'}>
  

        <div class="webname">
            <div class="head">
              <h1 class="header">(Interwiew Website Name)</h1>
              <div className='grid'>{cardInfo.map(renderCard)}</div>
            </div>
       </div>
       
    </div>
     
        
    )
}

export default HomePageBody
