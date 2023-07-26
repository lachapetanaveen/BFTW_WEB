import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  let navigate = useNavigate()
useEffect(() => {
  getdata()
},[])
const getdata = async() => {
  const dert = await localStorage.getItem('logindata');
  if(dert){
    navigate('/allusers')
  }
}
  return (
    <div className='app_container'>

            
            <Header />
           <div className='container-fluid content'>
            
                <h2 className='text-center p-4'>Contact of BFTW</h2>
            <div className='row'>
                <div className='col-md-6'>
                <h4 style={{marginTop:'60px',fontFamily:'bold',textAlign:'center'}}>INTERNATIONAL HEADQUARTERS</h4>
                <p style={{textAlign:'center'}}>Address :
Bibles For The World
4775 Granby Circle
Colorado Springs, CO 80919</p>
<p style={{textAlign:'center'}}>MAILING ADDRESS :<br></br> Bibles For The World
P.O.Box 49759
Colorado Springs, CO 80949 </p> 
<p style={{textAlign:'center'}}>PHONE📞
888-382-4253</p>
                </div>
                <div  className='col-md-6'>
                    {/* <img style={{width:'360px',height:'360px',marginRight:'40px'}} src={require('../../assets/BFTW.png')} /> */}
                    <div>
                <label className="text-sm">Name</label>
                      <input
                        type="text"
                        aria-label="Name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setName(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:'10px',width:'60%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      
                      />
                </div>
                    <div style={{marginTop:'20px'}}>
                <label className="text-sm">Email</label>
                      <input
                        type="text"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setEmail(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:'10px',width:'60%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      
                      />
                </div>
                      
                      <div style={{marginTop:'20px'}}>
                      <label className="text-sm">Message</label>
                      <textarea  style={{position:'relative',display:'block',borderRadius:10,width:'60%',height:'80px',borderColor:'gray',borderWidth:0.5}}></textarea>
                      {/* <input
                        type="password"
                        aria-label="First name"
                        id="first_name"
                        contentEditable={true}
                        onChange={(e) => setPassword(e.target.value)}
                    style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5}}
                      /> */}
                      </div>
                      <div  style={{ marginTop: 20,marginLeft:'20%' }}>
  <div style={{ marginRight: '20px', display: 'inline-block' }}>
    <Button
      className="btn btn-lg btn-primary"
      style={{width:'100%'}}
      variant="contained"
    >
      Submit
    </Button>
  </div>
  
</div>
                </div>
            </div>
                <div>
    
</div>

           </div>
           
            <Footer />
        </div>
//     <div className='wrapper'>
//     <Header />
//    <div>
//         <h1>Contact of BFTW</h1>
//         <h2 style={{marginTop:'60px',fontFamily:'bold'}}>INTERNATIONAL HEADQUARTERS
// <p>Address :
// Bibles For The World
// 4775 Granby Circle
// Colorado Springs, CO 80919</p>
// <p>MAILING ADDRESS :<br></br> Bibles For The World
// P.O.Box 49759
// Colorado Springs, CO 80949 </p> 
// <p>PHONE📞
// 888-382-4253</p>

// EMAIL ✉️<br></br>
// General Info: contact@bftw.org</h2>
//    </div>
//     <Footer />
// </div>
  )
}
export default ContactUs;