import React from 'react';
import './HomePageBody.css';
import CompanySignup from './CompanySignup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Features from './Features';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from 'react-bootstrap'
import './navbar.css';



function HomePageBody() {


    return (
        <Router>
        <div class='sticky-top' >
            
    <ReactBootStrap.Navbar className="nav navibar" collapseOnSelect expand="lg" variant="dark">
  <ReactBootStrap.Navbar.Brand className="navbrand" href="#home">SyneView <img className="weblogo" src="interview.png" /></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
      <ReactBootStrap.Nav.Link className="navitem" as={Link} to={"/features"}>Set Questions for Interview</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link className="navitem" as={Link} to={"/features"}>Create New Interviewee Login</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
  
        </div>
        <div>
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
        </Switch>
        </div>
        
    <div className={'home'}>
  

     <div class="webname">
        <h1 class="header">WELCOME! </h1>
        <h1 class="header">Below are the interviewees' responses : </h1>
        
        
     </div>
     <div>
     <Switch>
          <Route path="/signup">
            <CompanySignup />
          </Route>
        </Switch>
     </div>
     
       
    </div>
    </Router>
   
     
        
    )
}

export default HomePageBody
