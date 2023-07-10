import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/allusers/allusers';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import ContactUs from '../pages/contact/contact';


const PublicRoutes = () => {
    return ( 
        <>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
       </Routes>
       </>
     );
}
 
export default PublicRoutes;