import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/library_logo.jpg";
import Footer from "../components/Footer";
import "../styles/Home.css"
import SearchBar from "./SearchBar";
import BookData from "../Data.json";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Digital Library </h1>
        <p> smart library management system</p>
        {/* <Link to="/userLogin">
          <button> login </button>
        </Link> */}
         <SearchBar className="button" placeholder="Enter a Book Name..." data={BookData} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

