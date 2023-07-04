import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Home = () => {

    return ( 
      
        <div style={{borderRadius:'20px',borderBlockColor:'gray'}}className='wrapper'>
            <Header />
            <div className='container-fluid'>
            <div style={{marginTop:'60px',fontFamily:'bold'}} className='row'>
                <div className='col-md-4'>
                <Card sx={{maxWidth:345}}>
      <CardMedia
        sx={{ widows:50,height: 150 }}
      image={require('../../assets/istockphoto-1412543316-1024x1024.jpg')}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography style={{fontSize:'15px'}}variant="body2" color="black" >
     by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{fontSize:'13px'}}size="small">Share</Button>
        <Button style={{fontSize:'13px'}}size="small">Learn More</Button>
      </CardActions>
    </Card>
                </div>
                <div className='col-md-4' >
                <Card sx={{maxWidth:345}}>
      <CardMedia
        sx={{ widows:50,height: 150 }}
      image={require('../../assets/photo-1593112038458-246525299766.avif')}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography style={{fontSize:'15px'}}variant="body2" color="black" >
     by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{fontSize:'13px'}}size="small">Share</Button>
        <Button style={{fontSize:'13px'}}size="small">Learn More</Button>
      </CardActions>
    </Card>
                    {/* <img style={{width:'50%',}} src={require('../../assets/pexels-photo-842711.jpeg')}/> */}
                </div>
                <div className='col-md-4'>
                <Card sx={{maxWidth:345}}>
      <CardMedia
        sx={{ widows:50,height: 150 }}
      image={require('../../assets/Gods-Love.jpg')}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography style={{fontSize:'15px'}}variant="body2" color="black" >
     by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{fontSize:'13px'}}size="small">Share</Button>
        <Button style={{fontSize:'13px'}}size="small">Learn More</Button>
      </CardActions>
    </Card>
                </div>
            </div>
            </div>
            
            <Footer  />
        </div>
     );
}
 
export default Home;