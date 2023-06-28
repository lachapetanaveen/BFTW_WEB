import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';


const Home = () => {
    return ( 
        <div className='wrapper'>
            <Header />
            <div className='container-fluid'>
            <div style={{marginTop:'60px'}} className='row'>
                <div className='col-md-6'>
                    <p>
            


                    freestar
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
                <div className='col-md-6' style={{alignItems:'flex-end'}}>
                    <img style={{width:'50%',}} src={require('../../assets/pexels-photo-842711.jpeg')}/>
                </div>
            </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Home;