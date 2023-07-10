import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/header';

import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import { toast } from 'react-toastify';

const MyProfile = () => {
  
    const [email,setEmail] = React.useState('');
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [mobnumber,setMobnumber] =useState('');

  useEffect(() => {
    getemail();
  },[])
const getemail = async() => {
  console.log('calling....');
  const prodata = await localStorage.getItem('prodata')
  const det = await localStorage.getItem('localdata');
  console.log(JSON.parse(det),'locdet');
  const drt = JSON.parse(det)
  const prt = JSON.parse(prodata)
  if(det){
    setFirstname(det.firstname)
    setLastname(det.lastname)
  }
  setEmail(drt.email)
}
const updateprofile =async() => {
  if(!firstname){
    toast.error('Enter First Name')
  }else if(!lastname){
    toast.error('Enter Last Name')
  }else if(!mobnumber){
    toast.error('Enter Mobile Number')
  }else {
    const obj ={
      email:email,
      firstname:firstname,
      lastname:lastname,
      mobilenumber:mobnumber
    }
    const dert = await localStorage.setItem('profiledata',obj)
    toast.success('Profile Updated SuccessFully')
  }
}
  console.log(email,'email');
    return ( 
        <div>
        <Header />
   <Sidebar  />
   <div class="maincont">
    
      
       
<div style={{marginLeft:'40px'}}>
    
   
  
  
   <div class="row m-auto">

      
      {/* <h1 style={{fontSize:'20px',backgroundColor:'lightblue'}}>Welcome!!🙏to the My Profile</h1> */}

      
       
   </div>
   <div style={{marginTop:'26px',width: '50%'}}>
                <div>
                <label className="text-sm">first Name</label>
                      <input
                        type="text"
                        placeholder='Enter First Name'
                        aria-label="First name"
                        id="first_name"
                        value={firstname}
                        contentEditable={true}
                        onChange={(e) => setFirstname(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:'10px',width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      
                      />
                </div>
                      
                      <div style={{marginTop:'50px',position:'fixed',top:'110px',width:'20%',right:'500px',}}>
                      <label className="text-sm">Last Name</label>
                      <input 
                        type="text"
                        placeholder='Enter Last Name'
                        aria-label="First name"
                        id="first_name"
                        value={lastname}
                        contentEditable={true}
                        onChange={(e) => setLastname(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                      </div>
                      
                      <div style={{marginTop:'50px',position:'fixed',top:'110px',width:'20%',right:'500px',}}>
                      <label className="text-sm">Last Name</label>
                      <input 
                        type="text"
                        placeholder='Enter Last Name'
                        aria-label="First name"
                        id="first_name"
                        value={lastname}
                        contentEditable={true}
                        onChange={(e) => setLastname(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                      </div>
                      
                      <div style={{marginTop:'20px'}}>
                      <label className="text-sm">Mobile Number</label>
                      <input
                        type="text"
                        placeholder='E.g 123456'
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        value={mobnumber}
                        onChange={(e) => setMobnumber(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                      </div>
       
                      <div style={{marginTop:'20px'}}>
                      <label className="text-sm">Email</label>
                      <input
                        type="text"
                        value={email}
                        placeholder='Enter Email Address'
                        aria-label="First name"
                        id="first_name"
                        disabled
                       
                        contentEditable={true}
                        onChange={(e) => setEmail(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                       <div className="d-grid">
            <button onClick={() => updateprofile()} style={{marginBottom:'30px',float:'right',padding:'10px',position:'relative',webkitfontsmoothing: 'antialiased',}}  className="btn btn-primary">
              Submit
            </button> 
            
            
               
          </div>
                      </div>
                      
                    </div>
</div>

{/* <Footer /> */}
</div>
</div>
     );
}
 
export default MyProfile;