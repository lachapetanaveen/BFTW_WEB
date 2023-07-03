import React, { Component } from 'react';  
import Footer from '../../components/footer';
import Sidebar from '../home/sidebar';
import Header from '../../components/header';


const Ministries  = () => {
    return ( 

        <div>
 
        <Header />
   
   <div style={{display:'flex'}}>
      
       <Sidebar  />
<div style={{marginLeft:'40px'}}>
    
   
  
  
   <div class="row m-auto">

      
      <h1>Ministries-Page</h1>
       
   </div>
</div>

<Footer />
</div>
</div>
     );
}
 
export default Ministries;