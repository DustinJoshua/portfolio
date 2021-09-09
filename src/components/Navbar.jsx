import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../content/images/DL-Logo.png";
import classes from "./Navbar.module.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className={classes.link}>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Dustin Lott
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link className={classes.link} href="#aboutMe">
            About Me
          </Nav.Link>
          <Nav.Link className={classes.link} href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className={classes.link} href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
