import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from "react-toastify";
import axios from 'axios'
function Cart() {

    let navigate = useNavigate();
    
    const [cart, setCart] = useState({
        // userId: "",
        userEmail: "",
        bookId: "",
        bookTitle:"",
        request:""
      });


      const { userId, userEmail, bookId, bookTitle,request } = cart;

      const onInputChange = (e) => {
        setCart({ ...cart, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9000/addIssueRequest", cart);
        toast.success("Requested for issue")
        navigate("/userBooks");
      };
  return (
    <>
    <TopBar/>
    <div className="container">
        <SideBar/>
   
   
    <div className="container">
      <div className="row">
        <div className=" offset-lg-6 col-lg-600  border rounded  mt-6  shadow">
          <h2 className="text-center m-4">Register Book</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            {/* <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                User Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the user id"
                name="userId"
                value={userId}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                User Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Email"
                name="userEmail"
                value={userEmail}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Book Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Author"
                name="bookId"
                value={bookId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Book Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Category"
                name="bookTitle"
                value={bookTitle}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Requesting for....
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Category"
                name="request"
                value={request}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            
            <button type="submit" className="btn btn-outline-primary">
              Request
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
  )
}

export default Cart