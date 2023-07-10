import React from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';

function ContactUs() {
  return (
    <div className='wrapper'>
    <Header />
   <div>
        <h1>Contact of BFTW</h1>
        <h2 style={{marginTop:'60px',fontFamily:'bold'}}>INTERNATIONAL HEADQUARTERS
<p>Address :
Bibles For The World
4775 Granby Circle
Colorado Springs, CO 80919</p>
<p>MAILING ADDRESS :<br></br> Bibles For The World
P.O.Box 49759
Colorado Springs, CO 80949 </p> 
<p>PHONE📞
888-382-4253</p>

EMAIL ✉️<br></br>
General Info: contact@bftw.org</h2>
   </div>
    <Footer />
</div>
  )
}
export default ContactUs;