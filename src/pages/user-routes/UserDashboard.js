import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Base from '../../components/Base'
import Home from './UserHome'
import SideBar from './SideBar'
import TopBar from './TopBar'
import Books from './Books'
import UserBooks from './UserBooks'
import UserSidebar from './UserSidebar'
import "./userdashboard.css"
import Footer from '../../components/Footer'
import BannerImage from "../../assets/homelogo.jpg";
const UserDashboard=()=> {
  return (
    <div>
      
     <TopBar/>
     <div className='container'>
     <SideBar/>
     
     <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> User Dashboard </h1>
        <p> smart library management system</p>

        </div>
        </div>
     
     
  
     
     </div>
      
    </div>
    
  )
  
}

export default UserDashboard