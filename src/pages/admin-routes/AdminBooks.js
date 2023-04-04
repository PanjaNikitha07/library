import React from "react";
import axios from "axios";
import SideBar from "./SideBar";
import Topbar from "./TopBar";
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button, Container, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { toast } from "react-toastify";
function AdminBooks(props) {

  const navigate=useNavigate();
  const [bookData, setBookdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [book, setBook] = useState({
    accessNumber: "",
    title: "",
    author: "",
    category:"",
    subject:"",
    keyword:""
  });

  const { accesNumber, title, author, category, subject, keyword } = book;

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8097/bookservice/books", book);
    toast.success("Added Book Successfully")
    navigate("/adminBooks");
  };

  useEffect( ()=>{
    
getBookdata();
  },[]);
  const getBookdata= async()=>{
    const reqData= await fetch("http://localhost:8097/bookservice/getbooks");
    const resData= await reqData.json();
    //console.log(resData);
    setBookdata(resData);
    setFilterdata(resData);
    console.log(resData);

  }
  
const deleteBook= async(id)=>{

   await axios.delete(`http://localhost:8097/bookservice/deleteBookById/` +id)
   .then(console.log("Deleted"))
   toast.success("Book deleted")
     navigate("/adminHome")
    setBookdata(getBookdata);
 
 }

 const deleteCustomerByIds = () => {
  let arrayids = [];
  bookData.forEach(d => {
    if (d.select) {
      arrayids.push(d.id);
    }
  });
  axios
    .delete(`http://localhost:8097/bookservice/deleteBookByIds/${arrayids}`)
    .then(data => {
      console.log(data);
      getBookdata();
    })
    .catch(err => alert(err));
};


  

  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= bookData.filter( (item)=> item.title.toLowerCase().includes(getSearch) ||item.accessNumber.toString().toLowerCase().includes(getSearch) ||item.category.toLowerCase().includes(getSearch)|| item.author.toLowerCase().includes(getSearch) );
     setBookdata(searchdata);
    } 
    else if(getSearch.length>0)
    {
        const searchdata= bookData.filter( (item)=> item.author.toLowerCase().includes(getSearch));
     setBookdata(searchdata);
    }
    else {
      setBookdata(filterdata);
    }
    setQuery(getSearch);
  }

  return(
    <>
    <Topbar/>
    <div className='container'>
      <SideBar/>

        <React.Fragment>              
         <Container>
        <div className='row mt-3'> 
        <h4>
            
            <div style={{display:"flex" , marginbottom:"15px"}}>
            <Button onClick={()=>{setModalOpen(true)}} className="btn btn-primary " style={{marginLeft:"auto"}} >Add Book</Button>
            <Button className="btn btn-danger mx-2"  onClick={() => { deleteCustomerByIds(); }} >Delete Book</Button>
            <Modal show={modalOpen}>
              <Modal.Header><h2>Add a Book</h2></Modal.Header>
              <ModalBody>
              <form onSubmit={(e) => onSubmit(e)}>
              
            <div className="mb-2">
              <label htmlFor="Name" className="form-label">
                Access Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the accessNumber"
                name="accessNumber"
                value={accesNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Username" className="form-label">
                Book Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Email" className="form-label">
                Author
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Author"
                name="author"
                value={author}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Email" className="form-label">
                Category
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Category"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="mb-2">
              <label htmlFor="Username" className="form-label">
                Subject
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the subject"
                name="subject"
                value={subject}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Keyword
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the keyword"
                name="keyword"
                value={keyword}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            
          </form>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={()=>{setModalOpen(false)}}>  Close</button>
               
              </ModalFooter>
            </Modal>
            <br/>
            </div>


            <div className='container-md col-md-20 mt-2 '>
                            
                <div className="col-md-12">            
                <input  type="text" name='name' value={query}   className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search Books...' />
                </div>          
            </div> 
            <div className='col-md-12'>
            <table className="table" style={{ color: "black" }}>
              <thead>
                <tr>
                    <th scope='col'><input type="checkbox"/></th>   
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
                  <th><input type="checkbox"/></th>
                  <td>{getBook.id}</td>
                  <td>{getBook.accessNumber}</td>
                  <td>{getBook.title}</td>
                  <td>{getBook.author}</td>
                  <td>{getBook.category}</td>
                  {/* <td>
                      <button className='btn btn-primary mx-2'> add to cart</button>
                    </td> */}
                  <button className="btn btn-danger " style={{color:"black"}} onClick={()=>deleteBook(getBook.id)}> Delete <DeleteOutlineOutlinedIcon/></button>
                  </tr>
                   )) }  
                  
                    
              </tbody>
            </table>
            </div>
            </h4>
        </div>
      </Container>

        </React.Fragment>
        </div>

        </>
    );

}

export default AdminBooks;