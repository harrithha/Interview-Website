import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { FiPhoneCall } from 'react-icons/fi';


function Footer() {
    return (
        <div className='footer'>
            <div className='row' >
              <div className='feature col-lg-3'>
               <FaFacebook className="icon"/>          
              </div>
              <div className='feature col-lg-3'>
               <SiTwitter className="icon"/>          
              </div>
              <div className='feature col-lg-3'>
               <SiWhatsapp className="icon"/>            
              </div>
              <div className='feature col-lg-3'>
              <FiPhoneCall className="icon"/>              
              </div>
            </div>
            <p className='footertext'>Copyright © 2021. SyneView</p>

        </div>
    )
}

export default Footer
