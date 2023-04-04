import React, { useState , useEffect} from 'react'
import axios from "axios";
import { Form } from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import SideBar from './SideBar';
import Topbar from './TopBar';

function Books() {

    const[books,setBooks]=useState([]);
    const[search,setSearch]=useState('');
 
    useEffect(() => {
      loadBooks();
      
    }, [])
    
    const loadBooks =async ()=>{
        const result = await axios.get("http://localhost:8097/bookservice/getbooks");
        setBooks(result.data);
        
        console.log(result.data);

    }

  return (
    <>
    <Topbar/>
    <div className='container'>
      <SideBar/>
    
    <div className='container '>
      <div className='d-flex p-6'>
        <div className='py-4'>
        <Form>
          <InputGroup className="my-3">
            <Form.Control onChange={(e)=> setSearch(e.target.value)} placeholder="search for a book" id="exampleFormControlInput1"/>
          </InputGroup>
        </Form>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Access number</th>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">Category</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
          {
            books.filter((book)=>{
              return search.toLowerCase()===''? book : book.title.toLowerCase().includes(search);
            }).map((book)=>{
                <tr key={book.accessNumber}>
                    <th scope="row" > </th>
                    <td>{book.accessNumber}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>
                      <button className='btn btn-primary mx-2'> add to cart</button>
                    </td>
                </tr>
            })
          }
    
    
  </tbody>
</table>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Books