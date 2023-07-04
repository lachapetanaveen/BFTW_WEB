import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const About = () => {

    return ( 
        <div className='wrapper'>

            
            <Header />
           <div>
            
                <h1>About of BFTW</h1>

                <p>When the Gospel first came to the Hmar tribe in 1910, one of the first converts was a young man by the name of Chawnga (See Headhunters to Hearthunters). As more and more of the tribal people became Christians, he saw the need for the Scriptures in their native language. Chawnga prayed that someday he would have a son who would learn to read and write so that he could translate the Bible into the Hmar language.

Chawnga had four sons. One was named Rochunga. As Ro grew older, he knew that God wanted him to go to school. At ten years old, despite teasing from his friends, Ro became the first boy from his village to go to school. It was a long, dangerous ninety-six mile trip through a jungle of tigers, elephants, bears, and man-eating python snakes.

Six days later, Ro arrived safely in the village of Churachandpur and started school. He later continued his schooling in England, and then did his graduate work at Wheaton College in Chicago, Illinois.

During his time in school, Ro worked hard on translating the Bible into his native language. to hundreds of thousands that reach significant numbers of people within a very short time period.
</p>
<iframe style={{right:'20px',position:'fixed'}}width="450" height="250"  src="https://www.youtube.com/embed/2AuDhWiO2D4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
           
            <Footer />
        </div>
     );
}
 
export default About;