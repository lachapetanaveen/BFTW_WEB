import { Book, BookOnlineOutlined, BookOnlineRounded } from '@mui/icons-material';
import React, { Component,useState } from 'react';
import { FaExternalLinkSquareAlt, FaUsers } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";

const CustomSidebar = () => {
   const location = useLocation();
   const navigate = useNavigate();
   console.log(location.pathname,'location.pathname');
   const sendmenu = (path) => {
    navigate(path)
   }
    return ( 
        <div className="sidebar">
      <ul className="menu">
        <div onClick={() => sendmenu('/allusers')} style={{padding:'10px',cursor:'pointer',textAlign:'center'}}>
            <FaUsers color='gray' size={24} />
            <div style={{color:'black',fontSize:13,cursor:'pointer',marginTop:10}}>All Users</div>
        </div>
        <div onClick={() => sendmenu('/resources')} style={{padding:'10px',cursor:'pointer',textAlign:'center'}}>
            <BookOnlineRounded style={{color:'gray'}} size={24} />
            <div style={{color:'black',fontSize:13,marginTop:10}}>Resources</div>
        </div>
        <div onClick={() => sendmenu('/enquiry')} style={{padding:'10px',cursor:'pointer',textAlign:'center'}}>
            <FaExternalLinkSquareAlt color='gray' size={24} />
            <div style={{color:'black',fontSize:13,marginTop:10}}>Enquiry Center</div>
        </div>
       
      </ul>
    </div>
     );
}
 
export default CustomSidebar;