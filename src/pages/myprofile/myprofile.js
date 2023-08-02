import React, { Component, useEffect, useState } from 'react';
import Header from '../../components/header';

import Footer from '../../components/footer';
import { toast } from 'react-toastify';
import { getUserProfile, updateProfile } from '../../services/userService';

const MyProfile = () => {

  const [email, setEmail] = useState('');
  const [fullName, setName] = useState('');
  const [mobnumber, setMobnumber] = useState('');
  const [userDetails, setUser] = useState('');

  useEffect(() => {
    getuserDetails();
  }, [])

  const getuserDetails = async () => {
    try {
      const localprofiledata = await localStorage.getItem('profiledata');
      const parsedLocalprofiledata = JSON.parse(localprofiledata)
      if (parsedLocalprofiledata && parsedLocalprofiledata.email) {
        setUser(parsedLocalprofiledata)
        setName(parsedLocalprofiledata.full_name)
        setEmail(parsedLocalprofiledata.email)
        setMobnumber(parsedLocalprofiledata.mobile)
      } else {
        const localdata = await localStorage.getItem('logindata');
        const parsedData = JSON.parse(localdata)
        const getuserDetails = await getUserProfile(parsedData._id)
        if (getuserDetails) {
          setUser(parsedData)
          setName(getuserDetails.full_name)
          setEmail(getuserDetails.email)
          setMobnumber(getuserDetails.mobile)
          const data = JSON.stringify(getuserDetails); // Convert to JSON string
          const savedLocal = localStorage.setItem('profiledata', data)
        } else {
          toast.error('Please check users ')
        }
      }
    } catch (error) {
      toast.error('Please check users ')

    }

  }


  const updateprofile = async () => {
    if (!fullName) {
      toast.error('Enter Full Name')
    } else if (!mobnumber) {
      toast.error('Enter Mobile Number')
    } else {
      const obj = {
        email: email,
        full_name: fullName,
        mobile: mobnumber
      }
      const updatedData = await updateProfile(userDetails._id, obj)
      const data = JSON.stringify(updatedData.user); // Convert to JSON string
      const savedLocal = await localStorage.setItem('profiledata', data)
      await getuserDetails()
      toast.success('Profile Updated SuccessFully')
    }
  }
  return (
    <div className='app_container'>
      <Header />
      <div >

        <div className="content" style={{ marginLeft: '160px', padding: '20px', paddingTop: '8px' }}>




          <div className="m-auto">


            <div className='profile-box' style={{ marginTop: '60px', }}>
              <div style={{ padding: '10px', textAlign: 'center' }} className='th-bg'>
                <h4>Update Profile</h4>
              </div>
              <div style={{ padding: '20px' }}>
                <div className='row'>
                  <div className='col-md-12'>
                    <div>
                      <label className="text-sm">Full Name</label>
                      <input
                        type="text"
                        placeholder='Enter First Name'
                        aria-label="First name"
                        id="first_name"
                        value={fullName}
                        contentEditable={true}
                        onChange={(e) => setName(e.target.value)}
                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}

                      />
                    </div>
                  </div>
                  {/* <div className='col-md-6'>
                    <div>
                      <label className="text-sm">Last Name</label>
                      <input
                        type="text"
                        placeholder='Enter Last Name'
                        aria-label="Last name"
                        id="last_name"
                        // value={lastname}
                        contentEditable={true}
                        // onChange={(e) => setLastname(e.target.value)}
                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}

                      />
                    </div>
                  </div> */}
                </div>
                <div style={{ marginTop: '20px' }} className='row'>
                  <div className='col-md-12'>
                    <div>
                      <label className="text-sm">Email</label>
                      <input
                        type="text"
                        placeholder='Enter Email'
                        aria-label="Email"
                        id="email"
                        value={email}
                        contentEditable={false}
                        disabled
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}

                      />
                    </div>
                  </div>
                 
                </div>
                <div style={{ marginTop: '20px' }} className='row'>
                <div className='col-md-12'>
                    <div>
                      <label className="text-sm">Mobile Number</label>
                      <input
                        type="text"
                        placeholder='Enter Mobile Number'
                        aria-label="Mobile Number"
                        id="mobile_number"
                        value={mobnumber}
                        contentEditable={true}
                        onChange={(e) => setMobnumber(e.target.value)}
                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}

                      />
                    </div>
                  </div>
                  </div>
                <div style={{ marginTop: '20px' }}>
                  <button onClick={() => updateprofile()} className="btn btn-primary float-right">
                    Update Profile
                  </button>

                  <div className="clearfix"></div>

                </div>

                {/* <div style={{marginTop:'50px',position:'fixed',top:'110px',width:'20%',right:'500px',}}>
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
                      </div> */}

              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyProfile;