import React from "react";
import { useState,useEffect } from "react";
import "./sidebar.css";
import "./issuemodal.css"
import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IssuedBooks from "../user-routes/IssuedBooks";
import IssueModal from "./IssueModal";
import axios from "axios";


function IssueBooks(props) {
  
  const navigate=useNavigate();
  const [cartData, setCartdata]= useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  
  useEffect( ()=>{
    const getBookdata= async()=>{
      const reqData= await fetch("http://localhost:9000/getIssues");
      const resData= await reqData.json();
      //console.log(resData);
      setCartdata(resData);
      
      console.log(resData);

    }
getBookdata();
  },[]);
  
const deleteRow=async(id)=>{
  
    await axios.delete(`http://localhost:9000/deleteIssue/` +id)
    .then(console.log("Deleted"))
   
   navigate("/adminBooks")
                setCartdata();
  
  
 
 }
 function clickFunction1(){
  setModalOpen(true)
 }

 
 


  


  return(
    <>
    <TopBar/>
    <div className="container">
    <SideBar />
    

        <React.Fragment>              
         <Container>
        
        
            

            <div className='container-md col-lg-20'>
            <table className="table" style={{ color: "black" }}>
              <thead className="text-muted">
                <tr>
                 
                <th scope='col'>Cart Id</th>
                {/* <th scope="col">User Id</th> */}
                <th scope="col">User Email</th>
                <th scope="col">Book Id</th>
                <th scope="col">Book Title</th>
                <th scope="col">Request</th>
                <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartData.map( (getCart, index)=>(
                  <tr key={getCart.cartId}>
                  {/* <td>{index+1} </td> */}
                  <td>{getCart.cartId}</td>
                  {/* <td>{getCart.userId}</td> */}
                  <td>{getCart.userEmail}</td>
                  <td>{getCart.bookId}</td>
                  <td>{getCart.bookTitle}</td>
                  <td>{getCart.request}</td>
                  
                  
                  <button   className="btn btn-success" style={{color:"black"}} onClick={()=>{setModalOpen(true)} }>Request Status</button>
                 <button className="btn btn-danger" style={{color:"black"}} onClick={()=>{deleteRow(getCart.cartId)}}>Close Issue</button>
                  </tr>
                   )) }  
                  
                  {modalOpen&&  <IssueModal setOpenModal={setModalOpen}/>}
              </tbody>
            </table>
            
            </div>
            
        
      </Container>

        </React.Fragment>
        </div>
        </>
    );

}

export default IssueBooks;