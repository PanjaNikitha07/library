import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { doLogin } from "../auth";
import { toast } from "react-toastify";
import BannerImage from "../assets/library_logo.jpg";
function StaffLogin() {

     const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {

    // console.log({ email, password })
    axios.post('http://localhost:9002/adminservice/api/v1/auth/authenticate', {
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

  return (
    // <div className="row" style={{padding:80}}>
    //     <div className= "offset-lg-4 col-lg-6">
    //         <form onSubmit={handleApi} className="container">
    //         <div className="card" style={{backgroundColor: "black"}}>
    //                     <div className="card-header" style={{color: "white"}}>
    //                         <h2>Admin Login</h2>
    //                     </div>
    //                     <div className="card-body">
    //                         <div className="form-group">
    //                         <label style={{color: "white", margin: "10px"}}>Email <span className="errmsg">*</span></label>
    //                         <input value={email} onChange={handleEmail} placeholder="enter the email address" className="form-control" /> 
    //                         </div>
    //                         <div className="form-group">
    //                             <label style={{color: "white" , margin: "10px"}}>Password <span className="errmsg">*</span></label>
    //                             <input value={password} onChange={handlePassword} type="password" placeholder ="enter the password" className="form-control" /> 
    //                         </div>
    //                     </div>
    //                     <div className="card-footer">
    //                     <button type= className="btn btn-danger" style={{color:"white"}} >Login</button>
    //                     <Link to='/adminRegister' className="btn btn-success">New User</Link>
    //                     </div>
    //                     </div>
    //         </form>
    //     </div>
      

    // </div>
      <div className="App" style={{ backgroundImage: `url(${BannerImage})` }}>
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
      </div> </div>
     
     <div className="card-footer">
     <button className="btn btn-danger mx-2" style={{color:"white"}}onClick={handleApi} >Login</button>
      <Link className="btn btn-outline-info" to="/adminRegister" >New user</Link>
     </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default StaffLogin;