import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Header from "./components/header";
import Home from "./pages/home/home";
import About from "../src/pages/home/about";
import ContactUs from './pages/home/contact';
import Dashboard from './pages/home/dashboard';
import { ToastContainer } from 'react-toastify';
import MyProfile from './pages/home/myprofile';
import Donate from './pages/home/donate';
import Videos from './pages/home/videos';
import Ministries from './pages/home/ministries';




function App() {
return (

// Using the newly created Header
// component in this main component
// {/* <div>
//   <Home />
// </div> */}

<>
<ToastContainer />
<BrowserRouter>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About />}/>
  <Route path="/contact" element={<ContactUs/>}/>
  <Route path="/AllUsers" element={<Dashboard/>}/>
  <Route path="/MyProfile" element={<MyProfile/>}/>
  <Route path="/Donate" element={<Donate/>}/>
  <Route path="/Videos" element={<Videos/>}/>
  <Route path="/Ministries" element={<Ministries/>}/>

</Routes>
</BrowserRouter>
</>
);
}
export default App;

