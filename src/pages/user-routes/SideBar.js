import React from 'react'
import "./sidebar.css"
import{Link} from 'react-router-dom'
//import {HomeIcon, LibraryBooksIcon, InfoIcon,CategoryIcon, ShoppingCartIcon} from '@mui/icons-material/*';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import { Navigate } from 'react-router-dom';
function SideBar() {
  return (
   <div className="sidebar">
    <div className='sidebarWrapper'>
        <div className='sidebarTitle'>User Dashboard........ </div>
        <ul className = "sidebarList" >
           <li className ="sidebarListItem active">
            <HomeIcon className="sidebarListIcon"/>
            <Link to ="/userHome" className='sidebarListItemText'>Home</Link>
           
           </li>
           <li className ="sidebarListItem active">
            <LibraryBooksIcon className="sidebarListIcon"/>
            <Link to ="/userBooks"className='sidebarListItemText'>Books</Link>
          
           </li>
           <li className ="sidebarListItem active">
            <CategoryIcon className="sidebarListIcon"/>
            <Link to="/categories" className='sidebarListItemText'>Categories</Link>
           </li>
           
           <li className ="sidebarListItem active">
            < ShoppingCartIcon className="sidebarListIcon"/>
            <Link to="/issuedBooks"className='sidebarListItemText'>Issued Books</Link>
           </li>
           <li className ="sidebarListItem active">
            <InfoIcon className="sidebarListIcon"/>
            <Link to="/userAboutUs" className='sidebarListItemText'>About</Link>
           </li>
        </ul>


    </div>
   </div>
  
  
  
  )
}

export default SideBar