import React from 'react'
import './userhome.css'
import SideBar from './SideBar';
import "./sidebar.css"
import BannerImage from "../../assets/homelogo.jpg";
import TopBar from './TopBar';
function Home() {
  return (
<>
<TopBar/>
<div className="container">
    <SideBar />
    
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> User Dashboard </h1>
        <p> smart library management system</p>

        </div>
        </div>
        </div>
        </>
    
    
  )
}

export default Home