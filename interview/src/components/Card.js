import React from 'react';
import './Card.css';

function Card() {
    const cardInfo = [
        { image:"/images/Interviwee.jpg"  , title:"" , text:"INTERVIEWEE LOGIN" } ,
        { image:"/images/Comp.jpg" , title:"" , text:"COMPANY LOGIN" } ,
    ];

    const renderCard = (card, index) => {

  
        return(
          
          <div class="container">
          <div class="row">
              <div class="col-sm-4 py-3 py-sm-0">
              <div class="card box-shadow">
              
      <img src={card.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{card.title}</h5>
        <a href="#" class="btn btn-primary">{card.text}</a>
      </div>
    </div>
          </div> 
      </div>
      </div>
      
      
           
        )
    }
    return (
        <div>
            <div>{cardInfo.map(renderCard)}</div>
        </div>
    )
}

export default Card
