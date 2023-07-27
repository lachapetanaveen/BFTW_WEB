import React,{useEffect} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';


const About = () => {
    let navigate = useNavigate()
    useEffect(() => {
      getdata()
    },[])
    const getdata = async() => {
      const dert = await localStorage.getItem('logindata');
      if(dert){
        navigate('/allusers')
      }
    }
    return ( 
        <div className='app_container'>

            
            <Header />
           <div className='container-fluid content'>
            
                <h2 className='text-center p-4'>About of BFTW</h2>
            <div className='row'>
                <div className='col-md-6'>
                <p style={{textAlign:'justify'}}>When the Gospel first came to the Hmar tribe in 1910, one of the first converts was a young man by the name of Chawnga (See Headhunters to Hearthunters). As more and more of the tribal people became Christians, he saw the need for the Scriptures in their native language. Chawnga prayed that someday he would have a son who would learn to read and write so that he could translate the Bible into the Hmar language.

Chawnga had four sons. One was named Rochunga. As Ro grew older, he knew that God wanted him to go to school. At ten years old, despite teasing from his friends, Ro became the first boy from his village to go to school. It was a long, dangerous ninety-six mile trip through a jungle of tigers, elephants, bears, and man-eating python snakes.

Six days later, Ro arrived safely in the village of Churachandpur and started school. 
Bibles For The World is introducing a new book — Learn the Bible in a YEAR — to encourage people across the USA with the message that God’s Word transforms lives. 

“Because of our focus on the power of God’s Word to transform lives we have a unique opportunity to help foster a new appreciation for the Bible — and to enlist more people in making God’s Word known to unreached peoples 365 days walks listeners through the Biblethose ..... 
</p>
                </div>
                <div  className='col-md-6 d-flex justify-content-end'>
                    <img style={{width:'360px',height:'360px',marginRight:'40px'}} src={require('../../assets/BFTW.png')} />
                </div>
            </div>
                <div>
    
</div>

           </div>
           
            <Footer />
        </div>
     );
}
 
export default About;