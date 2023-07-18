import React, { Component, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from "@mui/material/Button";

const Resources= () => {
   const [interest,setInterest] = useState('');
   const [selectedFile, setSelectedFile] = useState(null);
   const [fileType, setFileType] = useState(null);

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      setFileType(file.type);
    };
    return ( 

        <div className='app_container'>
 
        <Header />
   
   <div >

<div className='content' >
 
  <div style={{display:'flex'}}>
  <div class="m-auto">

      
  <div className='profile-box' style={{marginTop:'60px',}}>
      <div style={{padding:'10px',textAlign:'center'}} className='th-bg'>
          <h4>Resources</h4>
      </div>
   <div style={{padding:'20px'}}>

<div className="mb-4">
      <h6 style={{marginTop:'20px'}}>Choose Interests : </h6>
   
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{display:'flex'}}>
      <input style={{marginRight:'6px'}} type="checkbox" />
       <label style={{marginTop:'10px'}}>Baptism</label>
      </div>
      <div style={{display:'flex',marginLeft:'16px'}}>
      <input style={{marginRight:'6px'}} type="checkbox" />
       <label style={{marginTop:'10px'}}>Counselling</label>
      </div>
      <div style={{display:'flex',marginLeft:'16px'}}>
      <input style={{marginRight:'6px'}} type="checkbox" />
       <label style={{marginTop:'10px'}}>Connect with a Church</label>
      </div>
      <div style={{display:'flex',marginLeft:'16px'}}>
      <input style={{marginRight:'6px'}} type="checkbox" />
       <label style={{marginTop:'10px'}}>More Scripture</label>
      </div>
   </div>
      
    </div>
    <div>
      <select style={{position:'relative',display:'block',borderRadius:10,width:'100%',height:'40px',borderColor:'gray',borderWidth:0.5,padding:4}}>
       <option>Select Upload File Type</option>
       <option value="pdf">PDF</option>
       <option value="audio">Audio</option>
       <option value="video">Video</option>
      </select>
    </div>
    <div >
    <label htmlFor="file-upload" className="custom-file-upload">
  <div className="background-image"></div>
  Upload File
</label>
<input id="file-upload" onChange={handleFileChange} type="file" hidden />
    </div>
   
    {fileType && selectedFile && (
      
      fileType.includes('image') ? 
      <img style={{width:'100%',height:'200px'}} src={URL.createObjectURL(selectedFile)} alt="Selected File" />
      : fileType.includes('pdf') ? 
      <embed
      src={URL.createObjectURL(selectedFile)}
      type="application/pdf"
      width="100%"
      height="250px"
    /> : fileType.includes('video') ? 
    <video controls>
    <source src={URL.createObjectURL(selectedFile)} type={fileType} />
    Your browser does not support the video tag.
  </video> :
      fileType.includes('audio') ? 
      <audio controls>
      <source src={URL.createObjectURL(selectedFile)} type={fileType} />
      Your browser does not support the audio tag.
    </audio> :null
      )}
      <div style={{marginTop:'20px'}}>
<Button
      className="btn btn-lg btn-primary"
      style={{width:'100%'}}
      variant="contained"
    >
      Upload Details
    </Button>
</div>
</div></div>
</div>

<div>
  
</div>
<div>
  
</div>
<div>

      
</div>
  </div>
  
</div>


<Footer />
</div>
</div>
     );
}
 
export default Resources;