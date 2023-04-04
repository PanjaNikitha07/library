import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink as ReactLink } from "react-router-dom";
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'react';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import { Modal, ModalBody } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { toast } from "react-toastify";
import { signIn , signUp} from "../services/user-service";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../auth";
import axios from "axios";

function Navbar() {
 
    const login=isLoggedIn();
    const [openLinks, setOpenLinks] = useState(false);
    const [firstname, firstnamechange] = useState("");
    const [lastname, lastnamechange] = useState("");
    const [regpassword, passwordchange] = useState("");
    const [regemail, emailchange] = useState("");
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [adminModalOpen,setAdminModalOpen]=useState(false);
    const [regModalOpen, setRegModalOpen]=useState(false);
    const [adminemail, setEmail] = useState('')
    const [adminpassword, setPassword] = useState('')
    const navigate=useNavigate();
    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
  
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
  
    const handleApi = () => {
  
      // console.log({ email, password })
      axios.post('http://localhost:9001/adminservice/api/v1/auth/authenticate', {
        email: email,
        password: password
      }).then(result => {
        console.log(result.data)
        doLogin(result,()=>{
          console.log("login details are saved to the localStorage")
        // alert('success')
        toast.success("login successful");
        navigate("/adminDashboard")
      })
      })
        .catch(error => {
          alert('service error')
          console.log(error)
        })
    }

    //validating the entered text data
    const validate = () => {
        let result = true;
        if (email === '' || email === null ) {
            result = false;
            toast.warning('Please Enter email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    useEffect(()=>{
sessionStorage.clear();
    },[]);
    
   
    

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj={"email": email,
            "password": password};

            signIn(inputobj).then((data)=>{
                console.log(data)
                //save the data to localStorage
                 doLogin(data,()=>{
                    console.log("login details are saved to the localStorage")
                    navigate("/user/dashboard");
                })
            


                
                toast.success("login successful");
            }).catch(error=>{
                console.log(error)
                if(error.status===400 || error.status===404){
                    toast.error(error.response.data.message)
                }
                else
                toast.error("Something went wrong on server!!")
            })
            
            }

        }
       
      //submit the form
      
  const toggleNavbar = (e) => {
    e.preventDefault();
    setOpenLinks(!openLinks);
  };

// const [login, setLogin] = useState(false);
const [user, setUser] = useState([]);

//  useEffect(()=>{
//        setLogin(isLoggedIn())
// //       setUser(getCurrentUserDetail())
//  },[login])

// const logout=()=>{
//  doLogout(()=>{
// setLogin(false)
//  })
// }
// console.log(window.localStorage.getItem("data"));

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt=" "/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/categories"> Categories </Link>
          <Link to="/about"> About </Link>
          <Link to="/userLogin"> User Login </Link>
          <Link to ="/adminLogin">Admin Login</Link>
        </div>
      </div>
      {window.localStorage.getItem("data")?
      <div className="rightSide">
      
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
        <Link to="/about"> About </Link>
        <button onClick={()=>{toggleNavbar()}}>
         <ReorderIcon/>
        </button>
      

      </div>
      :
      <div className="rightSide">
      
      <Link to="/"> Home </Link>
      <Link to="/categories"> Categories </Link>
      <Link to="/about"> About </Link>
       <Link onClick={()=>{setModalOpen(true)}}> User Login </Link>
       <Modal show={modalOpen} style={{ position: "fixed", top:"20%"}}>
        <ModalBody>
        <form onSubmit={ProceedLoginusingAPI} className="container" >
                    <div className="card" style={{backgroundColor: "black"}}>
                        <div className="card-header" style={{color: "white"}}>
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label style={{color: "white", margin: "10px"}}>Email <span className="errmsg">*</span></label>
                                <input value={email} placeholder="enter the email address"onChange={e => emailupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label style={{color: "white" , margin: "10px"}}>Password <span className="errmsg">*</span></label>
                                <input type="password" placeholder ="enter the password"value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Button  type="submit" >Login</Button> |
                            <Link onClick={()=>{setModalOpen(false) }}className="btn btn-success" to={'/userRegister'}>New User</Link>
                            {/* className="btn btn-danger" style={{color:"white"}} */}
                            </div>
                            </div>
                </form>
        </ModalBody>
       </Modal >

                          
                           
                             
                        
                      
                    
      {/* <Link to ="/adminLogin">Admin Login</Link> */}
      <Link to="/staffLogin" onclick={()=>{setAdminModalOpen(true)}}  >Staff Login </Link> 
      <Modal  show={adminModalOpen} style={{ position: "fixed", top:"20%"}}>
        <ModalBody>
        
        <div className="App">
      <div className="container " style={{padding:80}}>
      <div className= "offset-lg-3 col-lg-6 p-4">
      <div className="card" style={{backgroundColor: "black"}}>
                        <div className="card-header" style={{color: "white"}}>
                            <h2>Staff Login</h2>
                        </div>
         <div className="card-body">
         <div className="form-group">
         <label style={{color: "white", margin: "10px"}}> Email<span className="errmsg">*</span></label>
     <input className="form-control"value={email} placeholder="enter the email address" onChange={handleEmail} type="text" />
     </div>
     </div>
      <div className="card-body">
        <div className="form-group">
              <label style={{color: "white", margin: "10px"}}>Password<span className="errmsg">*</span></label>
              <input className="form-control"value={password} placeholder="enter the password" onChange={handlePassword} type="text" /> 
      </div> 
     </div>
     
     <div className="card-footer">
     <button className="btn btn-danger mx-2" style={{color:"white"}} onClick={handleApi} >Login</button>
      <Link to="/adminRegister" >New user</Link>
     </div>
      </div>
      </div>
      </div>
    </div>
        </ModalBody>
      </Modal>
      
     
     
     
    
      
      <button onClick={toggleNavbar}>
       <ReorderIcon/>
      </button>
    

    </div>
}



    </div>
  );
}

export default Navbar;