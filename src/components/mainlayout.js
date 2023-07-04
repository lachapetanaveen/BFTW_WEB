import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';


const MainLayout = ({children}) => {
    return ( 
        <div>
            <Header />
            {children}
            <Footer />
        </div>
     );
}
 
export default MainLayout;