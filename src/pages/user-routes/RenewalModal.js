import React from 'react'
import axios from 'axios';

// import '../issuemodal.css'
import { toast } from "react-toastify";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import CancelIcon from '@mui/icons-material/Cancel';
function RenewalModal({ setOpenModal }) {

    const navigate=useNavigate();
    const [cart, setCart] = useState({
        userId: "",
        userEmail: "",
        bookId: "",
        bookTitle:"",
       request:""
      });

      const { userId, userEmail, bookId, bookTitle, request} = cart;

      const onInputChange = (e) => {
        setCart({ ...cart, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9000/addIssueRequest", cart);
        toast.success("Requested for renewal")
        navigate("/userBooks");
      };
  return (
    <Draggable>
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <CancelIcon/>
          </button>
        </div>
        {/* <div className="title">
          <h1>Issue the Book</h1>
        </div> */}
        <div className="body">
          <div>
          <form onSubmit={(e) => onSubmit(e)}>
           
          <label className="label"><h3>Request for Renewal</h3><p></p></label>
    <div class="col">
      <input type="text" className="form-control" name="userId" value={userId} onChange={(e) => onInputChange(e)} placeholder="USER_ID"></input>
    </div>
    <div className="col">
      <input type="text" className="form-control" name="userEmail" value={userEmail} onChange={(e) => onInputChange(e)} placeholder="EMAIL"></input>
    </div>
    <div className="col">
      <input type="text" className="form-control" name="bookId" value={bookId} onChange={(e) => onInputChange(e)} placeholder="BOOK_ID"></input>
    </div>
    <div className="col">
      <input type="text" className="form-control" name="bookTitle" value={bookTitle} onChange={(e) => onInputChange(e)} placeholder="TITLE OF BOOK"></input>
    </div>
     <div className="col">
      <input type="text" className="form-control" name="request" value={request} onChange={(e) => onInputChange(e)} placeholder="enter the request"></input>
    </div>
    {/*
    <div className="col">
      <input type="text" className="form-control" name="status" value={status} onChange={(e) => onInputChange(e)} placeholder="Status"></input>
    </div> */}
    <button 
    className="btn btn-primary" type="submit">submit</button> 
    </form>
  </div>
  
          </div>
          
        </div>
      </div>
      </Draggable>
  )
}

export default RenewalModal