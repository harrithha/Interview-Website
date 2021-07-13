import React from 'react';
import './HomePageBody.css';
import { FaMobileAlt } from 'react-icons/fa';



function HomePageBody() {


    return (
    <div className={'home'}>
  

        <div class="webname">
            <div class="head">
              <h1 class="header">Welcome to SyneView</h1>
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
