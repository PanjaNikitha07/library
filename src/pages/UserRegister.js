import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../services/user-service";
import { Button } from "@mui/material";
import BannerImage from "../assets/library_logo.jpg";
const UserRegister = () => {

    
    const [firstname, firstnamechange] = useState("");
    const [lastname, lastnamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    

    const navigate = useNavigate();
    //validating the input entered 
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
       
        if (firstname === null || firstname === '') {
            isproceed = false;
            errormessage += ' Firstname';
        }
        if (lastname === null || lastname === '') {
          isproceed = false;
          errormessage += ' Lastname';
      }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }

    //submit the form
    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { firstname,lastname, password, email};
            if (IsValidate()) {
            //console.log(regobj);
               
            // server call api for sending data
            signUp(regobj).then((resp)=>{
              console.log(resp)
              console.log("succeess log")
              navigate("/userLogin")
              toast.success("Registered successful");
            }).catch((error)=>{
              console.log(error)
              console.log("Error log")
            }
            )
            
        }
    }
    return (
        <div style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="offset-lg-3 col-lg-6" style={{padding:80}}>
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card" style={{backgroundColor: "black"}}>
                        <div className="card-header" style={{color: "white"}}>
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{color: "white", margin: "10px"}}>First Name <span className="errmsg" >*</span></label>
                                        <input placeholder="enter the firstname"value={firstname} onChange={e => firstnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{color: "white", margin: "10px"}}>Last Name <span className="errmsg">*</span></label>
                                        <input value={lastname} placeholder="enter the lastname"onChange={e => lastnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{color: "white", margin: "10px"}}>Email <span className="errmsg">*</span></label>
                                        <input value={email} placeholder="enter the email address"onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label style={{color: "white", margin: "10px"}}>Password <span className="errmsg">*</span></label>
                                        <input value={password} placeholder="enter the password"onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                
                                
                                </div>
                                
                                </div>

                            
                        <div className="card-footer">
                            <Button  type="submit" className="btn btn-primary">Register</Button> |
                            <Link to='/' className="btn btn-danger">Close</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default UserRegister;