import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Header from './components/header';
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ContactUs from './pages/contact/contact';
import Dashboard from './pages/allusers/allusers';
import { ToastContainer } from 'react-toastify';
import MyProfile from './pages/myprofile/myprofile';
import Resources from './pages/resources/resources';
import AppRoutes from './routes/routes';


function App() {
return (

// Using the newly created Header
// component in this main component
// {/* <div>
//   <Home />
// </div> */}

<>
<AppRoutes />
<ToastContainer />

{/* <BrowserRouter>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About />}/>
  <Route path="/contact" element={<ContactUs/>}/>
  <Route path="/AllUsers" element={<Dashboard/>}/>
  <Route path="/MyProfile" element={<MyProfile/>}/>
  <Route path="/Resources" element={<Resources/>}/>
</Routes>
</BrowserRouter> */}
</>
);
}
export default App;

