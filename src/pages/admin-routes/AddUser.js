import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topbar from "./TopBar";
import SideBar from "./SideBar";
export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const { firstname, lastname, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/AddMember", user);
    navigate("/adminHome");
  };

  return (
    <>
    <Topbar/>
    <div className="container">
        <SideBar/>
   
   
    <div className="container">
      <div className="row">
        <div className=" offset-lg-6 col-lg-600  border rounded  mt-6  shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/adminHome">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}