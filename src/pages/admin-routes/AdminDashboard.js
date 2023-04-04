import { Routes ,Route} from 'react-router-dom'
import Base from '../../components/Base'
import Home from './AdminHome'
import SideBar from './SideBar'
import TopBar from './TopBar'
import Books from './Books'
// import Users from './Users'
import './adminhome.css'
import AdminBooks from './AdminBooks'
// import BannerImage from "../../assets/library_logo.jpg";
import BannerImage from "../../assets/adminPanel.jpg";
import "./admindashboard.css"
function AdminDashboard() {
  return (
    <div>
      <TopBar/>
     <div className='container'>
     <SideBar/>
     
     <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Admin Dashboard </h1>
        <p> smart library management system</p>

        </div>
        </div>
     
     </div>
      
    </div>
    
  )
}

export default AdminDashboard