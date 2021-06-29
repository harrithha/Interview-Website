import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from 'react-bootstrap'
import './navbar.css'
function Navbar() {
    return (
        <div class='sticky-top' >
            
    <ReactBootStrap.Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand className="navbrand" href="#home"><img className="weblogo" src="interview.png" /></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
      <ReactBootStrap.Nav.Link className="navitem" href="Features.js">Features</ReactBootStrap.Nav.Link>
       <ReactBootStrap.NavDropdown className="navitem" title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
  
        </div>
    )
}

export default Navbar

{/* <img className="weblogo" src='interview.png' /> */}