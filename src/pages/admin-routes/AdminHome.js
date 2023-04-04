import React from 'react'
import './adminhome.css'
// import BannerImage from "../../assets/library_logo.jpg";
import BannerImage from "../../assets/adminPanel.jpg";
import SideBar from '../admin-routes/SideBar';
import Topbar from './TopBar';
import Footer from '../../components/Footer';
function Home() {
  return (
   
    <>
     <Topbar/>
    <div className="container">
    <SideBar/>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Admin Dashboard </h1>
        <p> smart library management system</p>

        </div>
        </div>
        </div>
        {/* <Footer/> */}
    </>
    
  )
}

export default Home