import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CategoriesItem({ image, name, price }) {
  // localStorage.setItem('name')
  // console.log(name);
  const navigate=useNavigate();
  const[categories,setCategories]=useState([])
 const handleClick =()=>{
 axios.get(`http://localhost:8097/bookservice/getBookByCategory/${name}`)
 .then(res=>{
  console.log(res.data)
  setCategories(res.data);
  navigate("/categoriesTable")
 }
 )
  }
  return (
    <div className="categoriesItem">
      <div style={{ backgroundImage: `url(${image})` }} onClick={handleClick}> </div>
      <h1> {name} </h1>
      <p> {price} </p>
     

    </div>
  );
}

export default CategoriesItem;