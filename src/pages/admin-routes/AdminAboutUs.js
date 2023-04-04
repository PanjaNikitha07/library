import React from 'react'
import MultiplePizzas from "../../assets/About.jpg";
import "../../styles/About.css";
import SideBar from './SideBar';
import TopBar from './TopBar';
function AdminAboutUs() {
  return (
    <>
    
    <TopBar/>
    <div className="container">
    <SideBar />
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Because digital libraries (DLs) are treated as determinant information centers, libraries especially their managers are thinking about how phenomenon "DLs" can be effectively managed. So, the present article aims to provide managers of DLs with an approach. To do this, two main pillars considered in definition offered by Digital Library Federation namely staff and users are debated. Accordingly, some skills, instructional programs and qualities needed both for users and staff of DLs with which they can interact more effectively with new technologies such as DLs are included in the text. In fact, this paper emphasizes on educational function of DLs and thus offers an approach for its implementation from a managerial standpoint
        </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default AdminAboutUs