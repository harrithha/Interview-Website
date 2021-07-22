import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from 'react-bootstrap'
import './navbar.css';



function LoginEnter() {


    return (
        <div class='sticky-top' >
            
        <ReactBootStrap.Navbar className="nav navibar" collapseOnSelect expand="lg" variant="dark">
          <ReactBootStrap.Navbar.Brand className="navbrand" href="#home">SyneView <img className="weblogo" src="interview.png" /></ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="ml-auto">
             <ReactBootStrap.Nav.Link className="navitem" as={Link} to={""}>Set Questions for Interview</ReactBootStrap.Nav.Link>
             <ReactBootStrap.Nav.Link className="navitem" as={Link} to={"/intervieweesignup"}>Create New Interviewee Login</ReactBootStrap.Nav.Link>
             <ReactBootStrap.Nav.Link className="navitem" as={Link} to={"/videocall"}>Start a Video Call</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
  
        </div>
   
     
        
    )
}

export default LoginEnter
