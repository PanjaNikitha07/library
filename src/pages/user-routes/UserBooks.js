import React from "react";
import { useState,useEffect } from "react";
import "./sidebar.css";
import { Button, Container } from "react-bootstrap";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody ,ModalFooter} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function UserBooks(props) {
  
  const navigate=useNavigate();
  const [bookData, setBookdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const[cart,setCart]=useState("");
  const { userId, userEmail, bookId, bookTitle, request} = cart;

  const onInputChange = (e) => {
    setCart({ ...cart, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/addIssueRequest", cart);
    toast.success("Requested for issue")
    navigate("/userBooks");
  };
  useEffect( ()=>{
    const getBookdata= async()=>{
      const reqData= await fetch("http://localhost:8097/bookservice/getbooks");
      const resData= await reqData.json();
      //console.log(resData);
      setBookdata(resData);
      setFilterdata(resData);
      console.log(resData);

    }
getBookdata();
  },[]);
  

  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    axios.get(`http://localhost:8097/bookservice/getBookByTitle/${query}`)
    .then(res=>{
      setQuery(res.data);
      console.log(res.data)
    })
    if(getSearch.length > 0)
    {     
     const searchdata= bookData.filter( (item)=> item.title.toLowerCase().includes(getSearch) || item.author.toLowerCase().includes(getSearch) || item.category.toLowerCase().includes(getSearch)|| item.accessNumber.toString().toLowerCase().includes(getSearch));
     setBookdata(searchdata);
    } 
    else if(getSearch.length>0)
    {
        const searchdata= bookData.filter( (item)=> item.author.toLowerCase().includes(getSearch));
     setBookdata(searchdata);
     console.log(searchdata);
    }
    else {
      setBookdata(filterdata);
    }
    setQuery(getSearch);
  }
  

  return(
    <>
    <TopBar/>
    <div className="container">
    <SideBar />
    

        <React.Fragment>              
         <Container>
        <div className='row mt-3'> 
        <h3>
            <div className='col-md-12 mt-3 mb-3'>
                            
               <div className="col-md-12">   
               {/* <form> */}
               <input  
                  type="text" 
                  name='name' 
                  className="form-control" 
                  placeholder='Search Books...'
                  value={query} 
                  onChange={(e)=>handlesearch(e)} 
                   />
                   {/* <button type="submit" color="dark" onClick={(e)=>handlesearch(e)} >Search</button>
                   <button className="mx-2" color="info">Reset</button></form>          */}
                  
                </div>          
            </div>
            

            <div className='col-md-12'>
            <table className="table w-auto small" style={{ color: "black" }}>
              <thead className="text-muted">
                <tr>
                 
                  <th scope='col'>Book Id</th>
      <th scope="col">Access number</th>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">Category</th>
      <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookData.map( (getBook, index)=>(
                  <tr key={getBook.id}>
                  {/* <td>{index+1} </td> */}
                  <td>{getBook.id}</td>
                  <td>{getBook.accessNumber}</td>
                  <td>{getBook.title}</td>
                  <td>{getBook.author}</td>
                  <td>{getBook.category}</td>
                  {/* <td>
                      <button className='btn btn-primary mx-2'> add to cart</button>
                    </td> */}
                  <Button onClick={()=>{setModalOpen(true)}} className="btn btn-primary " style={{color:"black"}} >Add to Cart</Button>
                  <Modal show={modalOpen}>
              <Modal.Header><h2>Add Book To Cart</h2></Modal.Header>
              <ModalBody>
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
            {/* <button className="btn btn-outline-danger mx-2" onClick={()=>{setModalOpen(false)}}>
              Cancel
            </button> */}
          </form>
              </ModalBody>
              <ModalFooter>
                <Button className="btn btn-danger" onClick={()=>{setModalOpen(false)}}>  Close</Button>
               
              </ModalFooter>
            </Modal>
                  </tr>
                   )) }  
                  
                    
              </tbody>
            </table>
            </div>
            </h3>
        </div>
      </Container>

        </React.Fragment>
        </div>
        </>
    );

}

export default UserBooks;
// import React, { Component } from 'react'

// export default class UserBooks extends Component {
//   render() {
//     return (
//       <div>UserBooks</div>
//     )
//   }
// }
