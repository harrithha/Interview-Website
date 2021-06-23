import React from 'react';
import './HomePageBody.css';
import Button from "@material-ui/core/Button";
import {Card} from 'react-bootstrap';
import Card1 from './Card';
import { FaMobileAlt } from 'react-icons/fa';



function HomePageBody() {


    return (
    <div className={'home'}>
  

        <div class="webname">
            <div class="head">
              <h1 class="header">(Interwiew Website Name)</h1>
              <div className='feature col-lg-3'>
               <FaMobileAlt className="icon"/>
               <p>ALL DEVICES COMPATIBLE</p>
              </div>
            </div>
       </div>
       
    </div>
     
        
    )
}

export default HomePageBody
