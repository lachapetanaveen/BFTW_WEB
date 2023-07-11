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
      {/* <button className="toggle-button" onClick={handleToggleSidebar}>
        <i className={`fa ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button> */}
      <ul className="menu">
        <div onClick={() => sendmenu('/allusers')} style={{display:'flex',padding:'10px',cursor:'pointer'}}>
            <FaUsers color='black' size={20} />
            <div style={{color:'black',fontSize:16,marginLeft:'10px',cursor:'pointer'}}>All Users</div>
        </div>
        <div onClick={() => sendmenu('/resources')} style={{display:'flex',padding:'10px',cursor:'pointer'}}>
            <BookOnlineRounded size={20} />
            <div style={{color:'black',fontSize:16,marginLeft:'10px'}}>Resources</div>
        </div>
        <div onClick={() => sendmenu('/enquiry')} style={{display:'flex',padding:'10px',cursor:'pointer'}}>
            <FaExternalLinkSquareAlt size={20} />
            <div style={{color:'black',fontSize:16,marginLeft:'10px'}}>Enquiry Center</div>
        </div>
       
      </ul>
    </div>
     );
}
 
export default CustomSidebar;