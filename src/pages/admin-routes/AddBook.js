import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topbar from "./TopBar";
import SideBar from "./SideBar";
import { toast } from "react-toastify";
export default function AddBook() {
  let navigate = useNavigate();

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
    toast.success("Added Book Successfully ")
    navigate("/adminBooks");
  };

  return (
    <>
    <Topbar/>
    <div className="container">
        <SideBar/>
   
   
    <div className="container">
      <div className="row">
        <div className=" offset-lg-6 col-lg-600  border rounded  mt-6  shadow">
          <h2 className="text-center m-4">Register Book</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            
            <div className="mb-3">
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