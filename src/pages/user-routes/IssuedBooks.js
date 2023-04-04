import React from "react";
import { useState,useEffect } from "react";
import "./sidebar.css";
import { Container } from "react-bootstrap";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import RenewalModal from "./RenewalModal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import UserCart from "./UserCart";

function IssuedBooks(props) {
  
  const navigate=useNavigate();
  const [cartData, setCartdata]= useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect( ()=>{
    
getBookdata();
  },[]);
  
  const getBookdata= async()=>{
    const reqData= await fetch("http://localhost:9000/getStatus");
    const resData= await reqData.json();
    //console.log(resData);
    setCartdata(resData);
    
    console.log(resData);

  }

 const returnHandler = async(id)=>{
    await axios.delete(`http://localhost:9000/returnBook/` +id)
    .then(console.log("Deleted"))
    toast.success("Book Returned")
 navigate("/userBooks")
                setCartdata(getBookdata);
  
  
 
 }
  


  return(
    <>
    <TopBar/>
    <div className="container">
    <SideBar />
    
      
        <React.Fragment>  
               
         <Container >
        
       
            

            <div className='container-md col-lg-20'>
            <table className="table " style={{ color: "black" }}>
              <thead className="text-muted">
                <tr>
                 
     <th scope='col'>Cart Id</th>
      {/* <th scope="col">User Id</th>
      <th scope="col">User Email</th> */}
      <th scope="col">Book Id</th>
      <th scope="col">Book Title</th>
      <th scope='col'>status</th>
      <th scope="col">date</th>
      <th scope="col">Action</th>
      {/* <th scope="col">date</th> */}

                </tr>
              </thead>
              <tbody>
                {
                  cartData.map( (getCart)=>(
                  <tr key={getCart.cartId}>
                  <td>{getCart.cartId}</td>
                  {/* <td>{getCart.userId}</td>
                  
                  <td>{getCart.userEmail}</td> */}

                  <td>{getCart.bookId}</td>
                  <td>{getCart.bookTitle}</td>
                  <td>{getCart.status}</td>
                  <td>{getCart.date}</td>
                  
                  <button className="btn btn-outline-success mx-2" style={{marginRight:"15px"}} onClick={()=>{setModalOpen(true)}} >Renewal</button>
                  <button className="btn btn-outline-primary" onClick={()=>{returnHandler(getCart.cartId)}}>Return</button>
                  <button className="btn btn-outline-danger" onClick={()=>{returnHandler(getCart.cartId)}}>close</button>
                  {/* <Link to="/cart"  className="btn btn-primary " style={{color:"black"}} >Issued</Link> */}
                  </tr>
                   )) }  
                  
                  {modalOpen&&  <RenewalModal setOpenModal={setModalOpen}/>}
                    
              </tbody>
            </table>
            </div>
            
        
      </Container>

        </React.Fragment>
        </div>
        </>
    );

}

export default IssuedBooks;

