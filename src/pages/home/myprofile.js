import React, { Component } from 'react';
import Header from '../../components/header';

import Footer from '../../components/footer';
import Sidebar from '../home/sidebar';

const MyProfile = () => {
    const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
    return ( 
        <div>
        <Header />
   
   <div class="maincont">
    
      
       <Sidebar  />
<div style={{marginLeft:'40px'}}>
    
   
  
  
   <div class="row m-auto">

      
      <h1>My Profile</h1>

      
       
   </div>
   <div style={{marginTop:'26px',}}>
                <div>
                <label className="text-sm">first Name</label>
                      <input
                        type="text"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setEmail(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:'10px',width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      
                      />
                </div>
                      
                      <div style={{marginTop:'20px'}}>
                      <label className="text-sm">Last Name</label>
                      <input
                        type="text"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setPassword(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                      </div>
                      
                      <div style={{marginTop:'20px'}}>
                      <label className="text-sm">📞Mobile Number</label>
                      <input
                        type="text"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setPassword(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                      </div>

                      <div style={{marginTop:'20px'}}>
                      <label className="text-sm">✉️Email</label>
                      <input
                        type="text"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setPassword(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                      </div>
                      
                    </div>
</div>

<Footer />
</div>
</div>
     );
}
 
export default MyProfile;