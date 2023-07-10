import React, { Component } from 'react';
import PublicRoutes from './publicroutes';
import PrivateRoutes from './privateroutes';


const AppRoutes = () => {
    return ( 
        <>
            <PublicRoutes />
            <PrivateRoutes />
        </>
     );
}
 
export default AppRoutes;