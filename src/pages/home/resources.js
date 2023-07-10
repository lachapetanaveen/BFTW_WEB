import React, { Component, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../home/sidebar';


const Resources= () => {
   const [interest,setInterest] = useState('')
   const selint = (value) => {
      setInterest(value)
   }
    return ( 

        <div>
 
        <Header />
   
   <div style={{display:'flex'}}>
      
       <Sidebar  />
<div style={{marginLeft:'40px'}}>
    
   
  
  <div style={{display:'flex'}}>
  <div class="m-auto">

      
  <h1 style={{fontSize:'20px',backgroundColor:'lightblue'}}>Welcome!!🙏to the My Resources Page</h1>

<div className="mb-4">
      <label>Interests</label>
      <select onChange={(e) => selint(e.target.value)}  className="form-control">
         <option>Select Interests</option>
         <option value="Play">Sports🏟️</option>
         <option value="Audio">Audio📀</option>
         <option value="Video">Video📹</option>
         <option value="Movies">Movies🎞️</option>
      </select>
      
    </div>
     <div >
      {/* <label>FileUploaders</label> */}
     
      <input type="file"
     
 name="avatar"
 accept="image/png, image/jpeg">
</input>
    </div>
    <div >

    </div>
    
</div>
<div>
   {interest ? 
      interest === 'Play' ? 
      <div>
         {/* <h1 style={{position:'relative',left:'100px', top:'5px'}}>Sports🏟️</h1> */}
         <p>
            <h3 style={{float:'right',textAlign:'right',position:'fixed',border: '1px solid #4CAF50',fontFamily:'cursive'}}>Cricket🏏:</h3>
            <p style={{padding:'68px'}}>Cricket is a bat-and-ball game played between two teams of eleven players on a field at th
e centre of which is a 22-yard (20-metre) pitch with a wicket at each  The batting side scores runs by striking the ball bowled at one of the wickets with the bat and then running between the wickets, while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter (so they are "out"). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side either catching the ball after it is hit by the bat, but before it hits the ground, or hitting a wicket with the ball before a batter can cross the crease in front of the wicket. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches. They communicate with two off-field scorers who record the match's statistical information.
</p>            
             

         </p>
      </div>:interest === 'Audio' ? 
         <div>
            <h1 style={{fontFamily:'cursive'}}>Audio📀</h1>
<audio controls
style={{padding:'10px',}}
/>
{/* <h1>Audio</h1> */}
<audio controls
style={{padding:'10px',}}
/>
{/* <h1>Audio</h1> */}
<audio controls
style={{padding:'10px',}}
/>
{/* <h1>Audio</h1> */}
<audio controls
style={{padding:'10px',}}
/>
{/* <h1>Audio</h1> */}
<audio controls
style={{padding:'10px',}}
/>
{/* <h1>Audio</h1> */}
<audio controls
style={{padding:'10px',}}
/>
         </div>:interest === 'Video' ? 
         <div>
           
            <h1 style={{position:'relative',left:'100px',top:'5px',fontFamily:'cursive'}}>Video's📽️</h1>
            
            <iframe width="360" height="215" style={{floatRight:'20px',padding:'30px',}} src="https://www.youtube.com/embed/SNKd9iTIGrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <iframe width="360" height="215" style={{floatRight:'20px',padding:'30px',}}src="https://www.youtube.com/embed/2AuDhWiO2D4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="215" style={{floatRight:'20px',padding:'30px',}}src="https://www.youtube.com/embed/xsUkO1NDfsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="215" style={{floatRight:'20px',padding:'30px',}}src="https://www.youtube.com/embed/XKp4yWGTfXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div> : interest === 'Movies' ? 
         <div>
            <h1 style={{position:'relative',left:'100px',top:'5px',fontFamily:'cursive'}}>Movies🎞️</h1>
            <iframe width="360" height="215" style={{floatRight:'20px',padding:'30px',}}src="https://www.youtube.com/embed/46B_l5onsbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="215"  style={{floatRight:'20px',padding:'30px',}}src="https://www.youtube.com/embed/lEsW6GBKYes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="215"  style={{floatRight:'20px',padding:'30px',}}src="https://www.youtube.com/embed/dGLc_CunknA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="360" height="215" style={{floatRight:'20px',padding:'30px',}}src="https://www.youtube.com/embed/IcRcP8rGLJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>:null
      :null
      
   }
</div>
<div>
  
</div>
<div>

      
</div>
  </div>
  
</div>


{/* <Footer /> */}
</div>
</div>
     );
}
 
export default Resources;