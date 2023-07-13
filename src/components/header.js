import React, { useState, useEffect, useRef } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { FaBell, FaSignOutAlt, FaTimes, FaUserCircle, FaUserCog } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomSidebar from "./customsidebar";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [data,setData] = React.useState()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let navigate = useNavigate()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    getdata();
  },[])
  const getdata = async() => {
    const dert = await localStorage.getItem('localdata');
    if(dert){
      const derty = JSON.parse(dert)
    
    setData(derty)
    }
  }
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const submitdata = async() => {
    if(!email){
      toast.error('Enter Email')
    }else if(!password){
      toast.error('Enter Password')
    }else if(email !== 'naveen@olivetech.net' || password !== '123456'){
      toast.error('Invalid Email or Password')
    }else{
      try {
        const obj ={
          email:email,
          password:password
        }
        const det = JSON.stringify(obj)
        const dataa = await localStorage.setItem('localdata',det);
         setData(obj)
         toast.success('Login SuccessFully')
        navigate('/AllUsers')
        handleClose()
      } catch (ex) {
        
      }
    }
     
  }
  const logout = () => {
    localStorage.removeItem('localdata');
    navigate('/home')
  }

return (
    <>
   
<div  ref={dropdownRef}>
  <div>
   
    {data && (data !== null || data !== undefined) ?
    <CustomSidebar />
 : null
    }
  </div>
  <div>
  <nav>
      <div className="navbar-container">
       
         <div className="logo">
        
          <img className="logo_img"  src={require('../assets/BFTW.png')} />
        </div>
        
          {data && (data !== null || data !== undefined) ?
           <ul  className="nav-links">
             <div><FaBell size={25} color="white" /></div>
           <div style={{cursor:'pointer',marginLeft:'28px'}} onClick={() =>handleDropdownToggle()}><FaUserCircle size={25} color="white" /></div>
          {isDropdownOpen ? 
               <div  style={{position:'absolute',backgroundColor:'white',right:20,boxShadow:'0 2px 5px rgba(0, 0, 0, 0.2)',top:60,borderRadius:'5px'}}>
               <div style={{padding:'10px'}}>
               <div style={{display:'flex',cursor:'pointer'}}>
                 <FaUserCog size={18} color='black' style={{ fontWeight: 'normal' }} />
                 <p className='sharpened-text' style={{color:'black',marginLeft:'12px',fontSize:'14px',fontWeight:600}}>My Profile</p>
               </div>
               <div onClick={() => logout()} style={{display:'flex',cursor:'pointer'}}>
                 <FaSignOutAlt size={18} color='black' style={{ fontWeight: 'normal' }} />
                 <p className='sharpened-text' style={{color:'black',marginLeft:'12px',fontSize:'14px',fontWeight:600}}>Logout</p>
               </div>
               </div>
           </div> : null
          }
         
           </ul>
          
          :
          <ul className="nav-links">
          <li><Link style={{color:'white'}}to={'/home'}>Home</Link></li>
          <li><Link style={{color:'white'}} to={'/about'}>About</Link></li>
          <li><Link style={{color:'white'}} to={'/contact'}>Contact</Link></li>
          <button  onClick={() => handleOpen()} className="btn btn-sm btn-white"> Login
        </button>
        </ul>
          }

      </div>
    </nav>
    {/* {isDropdownOpen && ( */}
       
      {/* )} */}
  </div>
</div>


<Modal
       
        style={{width:'80%',borderRadius:10}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box style={{width:'50%',position:'absolute',top:'30%',backgroundColor:'white',left:'40%',borderRadius:10}} >
         
            <div className="modal_header">
           
              <div className="modal_logo">
              <img style={{width:'25%'}}src={require('../assets/bftw_new.png')} />
              </div>
              <div onClick={handleClose} className="modal_close">
              <FaTimes size={24} color="red" />
              </div>
            </div>
            
            <div className="p-4">
              <div>
              <div style={{marginTop:'8px',}}>
                <div>
                <label className="text-sm">Email</label>
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
                      <label className="text-sm">Password</label>
                      <input
                        type="password"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setPassword(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      />
                      </div>
                      
                       
                      
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:20}}>
                      <div>
                      <Button
                  onClick={() => submitdata()}
                  className="btn btn-lg btn-primary"
                  variant="contained"
                >
                  Submit
                </Button>
                      </div>
                      <div style={{marginLeft:'20px'}}>
                      <Button
                  onClick={() => handleClose()}
                  className="btn btn-lg btn-danger"
                  variant="contained"
                >
                  Reset
                </Button>
                      </div>
                    </div>
               
              </div>
            </div>
            <div className="flex !items-center !justify-center">
              
              <div>
                
              </div>
             
            </div>
          </Box>
        </Fade>
      </Modal>
</>
);
}
