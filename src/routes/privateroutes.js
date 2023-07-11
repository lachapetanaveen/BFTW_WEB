import React, { Component,useEffect } from 'react';
import { Outlet, Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import Dashboard from '../pages/allusers/allusers';
import MyProfile from '../pages/myprofile/myprofile';
import Resources from '../pages/resources/resources';
import EnquiryCenter from '../pages/enquiry/enquiry';

const PrivateRoutes = () => {
    return ( 
        <>
          <Routes>
            <Route element={<PrivateMiddleware />}>
                <Route path='/allusers' element={<Dashboard />} />
                <Route path='/myprofile' element={<MyProfile />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/enquiry' element={<EnquiryCenter />} />
            </Route>
          </Routes>
        </>
     );
}
 


const PrivateMiddleware = () => {
   
    useEffect(() => {
      const checkAuthentication = async () => {
        const locdata = await localStorage.getItem('localdata');
        // Check your authentication logic here, for example, verifying cookies
        if (!locdata) {
          // Redirect to login if not authenticated
          window.location.href = '/home';
        }
      };
  
      checkAuthentication();
    }, []);
  
    return <Outlet />;
  };
  
  export default PrivateRoutes;