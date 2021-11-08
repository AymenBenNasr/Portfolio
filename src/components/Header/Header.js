import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav , Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route , withRouter , NavLink} from "react-router-dom";


import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";

import './Header.css'
const Header = (props) => {

    const pathName = props?.location?.pathame;

  return (
    <Navbar expand="lg" className="header">
      
      <Nav.Link as={NavLink} to="/">
          
        <Navbar.Brand className="head_home">
          <HomeRoundedIcon />
        </Navbar.Brand>
      </Nav.Link>
      
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {/* Resume Header */}
          <Nav.Link 
            as = {NavLink} 
            to = '/' 
            className={pathName == "/" ? "header_link_active" : "header_link"}>
              Resume
          </Nav.Link>
          {/* Portfoilio Header */}
          <Nav.Link 
            as = {NavLink} 
            to = '/Portfolio' 
            className={pathName == "/Portfolio" ? "header_link_active" : "header_link"}>
              Portfolio
          </Nav.Link>
        </Nav>

        <div className="right_header">
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
              
              </a>
          ))}
        </div>
      </Navbar.Collapse>
    </Navbar>
  //   <Navbar bg="dark" variant="dark">
  //   <Container>
  //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //   <Nav className="me-auto">
  //     <Nav.Link href="#home">Home</Nav.Link>
  //     <Nav.Link href="#features">Features</Nav.Link>
  //     <Nav.Link href="#pricing">Pricing</Nav.Link>
  //   </Nav>
  //   </Container>
  // </Navbar>
  )
}

export default withRouter(Header)  ;
