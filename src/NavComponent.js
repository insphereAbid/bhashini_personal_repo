import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomButton from "./buttonComponent/CustomButton";
import "./App.css";
const NavComponent = () => {
  return (
    <Navbar expand="lg" className="bg-color">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Bhashini</Nav.Link>
            <Nav.Link href="#link">ulca</Nav.Link>

            <Nav.Link href="#link">Anuvaad</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CustomButton
        text={"bhaashadan"}
        fontSize={"15px"}
        width={"166px"}
        height={"39px"}
        fontWeight={"700"}
        />
      </Container>
    </Navbar>
  );
};

export default NavComponent;
