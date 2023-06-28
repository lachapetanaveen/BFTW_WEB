import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return ( 
        <div style={{position:'absolute',bottom:10,width:'100%'}}>
            <div className='row'>
                <div className='col-md-4'>
                <div style={{ color: 'black',marginTop:'20px',marginLeft:'30px',fontFamily:'Times New Roman", Times, serif' }} className='flex cursor-pointer text-decoration-underline'>
                      <a  target="_blank" rel="noopener noreferrer" style={{ color: '#0A1A44' }}>
                          Privacy Policy
                      </a>
                  </div>
                </div>
                <div className='col-md-4'>
                <p style={{ color: 'black',marginTop:'20px' }}>{`©Copyright ${new Date().getFullYear()}. BFTW.com All Rights Reserved`}</p>
                </div>
                <div className='col-md-4'>
                <div className='flex mobcenter'>
                      <div className='flex'>
                          <div>
                              <FontAwesomeIcon className='iconsize'  icon={faApple} />
                          </div>
                          <div className='mal-2 mobdis'>
                              <p>Get it on the </p>
                              <h5>App Store</h5>
                          </div>
                      </div>
                      <div className='flex ml-4'>
                          <div >
                              <img className='footimgsize'  src={require('../assets/playstore.png')} />
                          </div>
                          <div className='mal-2 mobdis'>
                              <p>Get it on the </p>
                              <h5>Google Play</h5>
                          </div>
                      </div>
                      <div className='flex ml-4'>
                          <div >
                              <img className='footimgsize'  src={require('../assets/microsoft.png')} />
                          </div>
                          <div className='mal-2 mobdis'>
                              <p>Get it on the </p>
                              <h5>Microsoft Store</h5>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      
     );
}
 
export default Footer;