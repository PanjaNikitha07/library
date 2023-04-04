import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { CategoriesList } from '../helpers/CategoriesList';
function CategoriesTable() {
    // console.log(CategoriesList.name)
    // console.log(name)
    // const name=CategoriesList.map(list=>list.name);
    // const names=name.map(n=>n.split(','))
    // console.log(names[0])
    const[name,setname]=useState([]);
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
    axios.get(`http://localhost:8097/bookservice/getallCategories`)
    .then(res=>{
      setname(res.data);
      // console.log(res.data);
    })
    },[])
    const n = name.map(na=>na.split(','))
    console.log(n)
    
    
    useEffect(() =>{
    
    axios.get(`http://localhost:8097/bookservice/getBookByCategory/${n[0]}`)
    .then(res=>{
    console.log(res.data)
    setCategories(res.data);
 })
 },[]);

  return (
    
        <div className='col-md-12 mt-5'>
            <table className="table" style={{ color: "black" }}>
              <thead className="text-muted">
                <tr>
                
                    <th scope='col'>Book Id</th>
                    <th scope="col">Access number</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                {
                  categories.map( (item)=>(
                  <tr key={item.id}>
                  
                  <td>{item.id}</td>
                  <td>{item.accessNumber}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.category}</td>
                 
                  </tr>
                   )) }  
                  
                    
              </tbody>
            </table>
            </div>

   
  )
}

export default CategoriesTable;