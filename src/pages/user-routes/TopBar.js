import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./topbar.css"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function TopBar() {
const navigate=useNavigate();
  const handleClick=()=>{
    localStorage.clear();
    navigate("/userLogin");
  }
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'> 
                <span className='logo'>UserPanel </span>
            </div>
           <div className='topRight'>
            <div className='topRightContainer'>
                <PersonIcon className="accountlogo"/>
                <Button onClick={handleClick}>Logout</Button>
            </div>
            
           </div>
        </div>

    </div>
  )
}

export default TopBar