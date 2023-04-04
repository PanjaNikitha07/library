import React from 'react'
import './topbar.css'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Topbar() {
  const navigate=useNavigate(); 
  const handleClick=()=>{
    localStorage.clear();
    navigate("/staffLogin");
  }
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'> 
                <span className='logo'>adminPanel </span>
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

export default Topbar