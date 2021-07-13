import React from 'react'
import "./Features.css"
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegHandshake } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { GiHelp } from 'react-icons/gi';

function Features() {
    return (
        <div className="features">
            <div className='row' >
              <div className='feature col-lg-3'>
               <p>EASY TO USE</p>
              </div>
              <div className='feature col-lg-3'>
               <p>COMMITTED TO WORK</p>
              </div>
              <div className='feature col-lg-3'>
               <p>ALL DEVICES COMPATIBLE</p>
              </div>
              <div className='feature col-lg-3'>
               <p>24/7 HELP SUPPORT</p>
              </div>
            </div>
        </div>
        
    )
}

export default Features
