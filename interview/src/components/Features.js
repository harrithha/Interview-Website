import React from 'react'
import "./Features.css"
import { FaCheckCircle } from 'react-icons/fa';


function Features() {
    return (
        <div className="features">
            <div className='row' >
              <div className='feature col-lg-3'>
               <FaCheckCircle className="icon"/>
               <p>Easy to Use</p>
              </div>
              <div className='feature col-lg-3'>
               <FaCheckCircle className="icon"/>
               <p>Easy to Use</p>
              </div>
              <div className='feature col-lg-3'>
               <FaCheckCircle className="icon"/>
               <p>COMMITTED TO WORK</p>
              </div>
              <div className='feature col-lg-3'>
               <FaCheckCircle className="icon"/>
               <p>COMMITTED TO WORK</p>
              </div>
            </div>
        </div>
        
    )
}

export default Features
