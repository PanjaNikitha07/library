import React from 'react'
import "./sidebar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoIcon from '@mui/icons-material/Info';
import CategoryIcon from '@mui/icons-material/Category';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar">
    <div className='sidebarWrapper'>
        <div className='sidebarTitle'>Admin Dashboard........ </div>
        <ul className = "sidebarList">
           <li className ="sidebarListItem active">
            <HomeIcon className="sidebarListIcon"/>
            <Link to="/adminHome" className='sidebarListItemText'>Home</Link>
           </li>
           <li className ="sidebarListItem active">
            <LibraryBooksIcon className="sidebarListIcon"/>
            <Link to ="/adminBooks" className='sidebarListItemText'>Books</Link>
           </li>
           <li className ="sidebarListItem active">
            <GroupSharpIcon className="sidebarListIcon"/>
            <Link to = "/users" className='sidebarListItemText'>Users</Link>
           </li>
           <li className ="sidebarListItem active">
            <CategoryIcon className="sidebarListIcon"/>
            <Link to ="/categories" className='sidebarListItemText'>Categories</Link>
           </li>
           
           <li className ="sidebarListItem active">
            < ShoppingCartIcon className="sidebarListIcon"/>
            <Link to="/issueBooks" className='sidebarListItemText'>Issue Books</Link>
           </li>
           <li className ="sidebarListItem active">
            <InfoIcon className="sidebarListIcon"/>
            <Link to="/adminAboutUs" className='sidebarListItemText'>About</Link>
           </li>
        </ul>


    </div>
   </div>
  
  )
}

export default SideBar