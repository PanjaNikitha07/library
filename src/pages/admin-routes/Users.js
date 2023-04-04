
import React, { Component, } from "react";

import { Card, Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Topbar from "./TopBar";
import SideBar from "./SideBar";


 class Users extends Component 
{

  constructor(props) {
    super(props);
    this.state = {
      members: [],
    
    };
   
  }
  componentDidMount() {
   axios.get("http://localhost:9000/members")
    //  axios.get("http://localhost:8098/userservice/getUsers")
     .then(response => {  
      const members = response.data; 
      console.log({members}) 
      this.setState({ members }); 
     
    })  
  }
  deleteRow(id)
    {  
      axios.delete(`http://localhost:9000/members/`+id)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
      
          const members = this.state.members.filter((member) => member.id !== id);  
          this.setState({ members });  
          
        })  
    }
     
  render() 
  {
    return (
      <>
      <Topbar/>
      <div className="container">
        <SideBar/>
      
      <div className="container-md col-lg-20">
      <div style={{display:"flex"}}>
            <Link to="/addUser" className="btn btn-dark mt-2 mb-2" style={{marginLeft:"auto"} } >Add a User</Link>
            
            </div>
        <div style={{ display: this.state.show ? "block" : "none" }}>   
        </div>
        <h4> 
          
       <Card className="border">
      
          <Card.Header>
            {/* {" "} */}
            <div>
            
            Users List</div>
           
          </Card.Header>
          
          <Card.Body>
            <Table>
            {/* striped bordered hover variant="dark" */}
              <thead>
                <tr >
                <th>USER_ID</th>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>EMAIL</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {this.state.members.length === 0 ? (
                  <tr align="center">
                    <td colSpan="5">{this.state.members.length}</td>
                  </tr>
                ) : (
                  this.state.members.map((member,id) => (
                    <tr key={id} >
                      <td>{id+1}</td>
                      <td>{member.firstname} </td>
                      <td>{member.lastname} </td>
                      <td>{member.email} </td>
                      <td>
                          
                      <button className="btn btn-danger" onClick={() => this.deleteRow(member.id)}>Delete</button>
                           
                      </td>
                    </tr>
                  ))
                )}
                  </tbody>
            </Table>
          </Card.Body>
          
        </Card>
        </h4>
        
      </div>
      </div>
      </>
    );
  }
  }

  export default Users;