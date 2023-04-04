import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signIn } from "../services/user-service";
import { doLogin } from "../auth";

const UserLogin = () => {
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const navigate=useNavigate();

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
    
    return (
        <div className="row" style={{padding:80}}>
            <div className="offset-lg-4 col-lg-6"  >
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
                            <Button  type="submit" className="btn btn-danger" style={{color:"white"}}>Login</Button> |
                            <Link className="btn btn-success" to={'/userRegister'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserLogin;

