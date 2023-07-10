import * as React from "react";
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [data,setData] = React.useState()
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
      console.log('====================================');
      console.log(derty,'dert');
      console.log('====================================');
    setData(derty)
    }
  }
  const submitdata = async() => {
    if(!email){
      toast.error('Enter Email')
    }else if(!password){
      toast.error('Enter Password')
    }else if(email !== 'naveen@olivetech.net' && password !== '123456'){
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
  console.log('====================================');
  console.log(data,'data');
  console.log('====================================');
return (
    <>
    <nav class="navbar navbar-default">
  <div style={{backgroundColor:'#063a6d',padding:'10px',}}class="container-fluid">
    <div class="navbar-header">
      {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
      <img style={{width:'25%',height:'15%'}}src={require('../assets/bftw_new.png')} />
    </div>
    {data && (data !== null || data !== undefined) ? 
      null:
      <ul class="nav navbar-nav">
      <li className="menulist"><Link style={{fontSize:'20px',color:'white'}}to={'/home'}>Home</Link></li>
      <li className="menulist"><Link style={{fontSize:'20px',color:'white'}} to={'/about'}>About</Link></li>
      <li className="menulist"> <Link style={{fontSize:'20px',color:'white'}} to={'/contact'}>Contact Us</Link></li>
      {/* <li><a href="#">Page 3</a></li> */}
    </ul>

    }
    
    <div style={{float:'right'}}>
    {data && (data !== null || data !== undefined) ? 
        <div style={{display:'flex'}}>
          <p className="logdata" style={{color:'white',fontFamily:'bold'}}>{data.email}</p>
          <button  onClick={() => logout()}  className="btn btn-sm  btn-primary cusbtn"> Logout
        </button>
        </div> : 
        <button  onClick={() => handleOpen()} className="btn btn-lg btn-primary"> Login
        </button>
    }
        
    </div>
  </div>
</nav>
  
<Modal
        // className="max-sm:w-full"
        style={{width:'80%'}}
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
          <Box style={{width:'40%',position:'absolute',top:'30%',backgroundColor:'white',left:'40%',padding:'20px'}} className="absolute top-1/2 bg-theme left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/4 lg:1/4 h-auto bg-background-paper shadow-24 p-4">
            <div className="flex w-full  ">
              <div className="flex-1"></div>
              <div
                onClick={handleClose}
               className="close"
                // className="float-right cursor-pointer mt-2"
              >
                <div style={{display:'flex',backgroundColor:'red',width:30,height:30,borderRadius:100,alignItems:'center',justifyContent:'center',alignSelf:'flex-end'}}>
                <FaTimes color="white" />
                </div>
                
                {/* <p className="text-gray">X</p> */}
              </div>
            </div>
            <img style={{width:'90px',height:'90px',marginLeft:'40%'}}src={require('../assets/logo (1).png')} />
            <div className="p-4">
              <div>
              <div style={{marginTop:'26px',}}>
                <div>
                <label className="text-sm">Email</label>
                      <input
                        type="text"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setEmail(e.target.value)}
                    style={{position:'relative',marginTop:'20px',display:'block',borderRadius:'10px',width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      
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
                {/* <label className="text-sm">
                    Enter your promo code here to see if an active membership is
                    available.
                  </label>
                  <input
                    type="text"
                    aria-label="New Password"
                    placeholder="Type Promo Code here"
                    className="relative m-1 w-full  mb-3 -ml-px block flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                  /> */}
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