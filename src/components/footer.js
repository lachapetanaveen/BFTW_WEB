import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGooglePay, faGooglePlay, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import MailIcon from '@mui/icons-material/Mail'
const Footer = () => {

    return ( 


<footer class="footer-distributed footer">
<div className='row'>
    <div className='col-md-4'>
        <img style={{width:'40%',float:'right'}} src={require('../assets/bftw_new.png')} />
    </div>
    <div style={{marginTop:'40px',}} className='col-md-4'>
    <p style={{fontSize:'16px',color:'black'}}>©Copyright 2023. BFTW.COM. All Rights Reserved</p>
    </div>
    <div style={{marginTop:'40px'}} className='col-md-4'>
        <div style={{display:'flex'}}>
            <div style={{marginLeft:'10px',}}>
            <FontAwesomeIcon  className='iconsize'  icon={faFacebook} />
            </div>
            <div style={{marginLeft:'10px'}}>
            <FontAwesomeIcon className='iconsize'  icon={faInstagram} />
            </div>
            <div style={{marginLeft:'10px'}}>
            <FontAwesomeIcon className='iconsize'  icon={faGooglePlay} />
            </div>
            <div style={{marginLeft:'10px'}}>
            <FontAwesomeIcon className='iconsize'  icon={faTwitter} />
            </div>
        </div>
    </div>
</div>
{/* <div class="footer-right">

    <a href="#"></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

</div>

<div class="footer-left">
    <div className='navbar-header'>
    <img style={{width:'15%',height:'15%'}}src={require('../assets/bftw_new.png')} />
        
    </div>

    <p style={{fontSize:'20px',color:'black'}}>©Copyright 2023. BFTW.COM. All Rights Reserved</p>
        
    

</div> */}

</footer>
        
      
     );
}
 
export default Footer;