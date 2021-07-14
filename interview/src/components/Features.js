import React from 'react'
import "./Features.css"
import { FaRegHandshake } from 'react-icons/fa';
import { BiMobile } from 'react-icons/bi';
import { GiHelp } from 'react-icons/gi';
import { BiCheckCircle} from 'react-icons/bi';

function Features() {
    return (
        <div className="features">
            <div className='row' >
              <div className='feature col-lg-3'>
               <p>EASY TO USE</p>
               <BiCheckCircle className="featureicon circle"/>
              </div>
              <div className='feature col-lg-3'>
               <p>COMMITTED TO WORK</p>
               <FaRegHandshake className="featureicon"/>
              </div>
              <div className='feature col-lg-3'>
               <p>ALL DEVICES COMPATIBLE</p>
               <BiMobile className="featureicon mobile"/>
              </div>
              <div className='feature col-lg-3'>
               <p>HELP CARE</p>
               <GiHelp className="featureicon" />
              </div>
            </div>
        </div>
        
    )
}

export default Features
