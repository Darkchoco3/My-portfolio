import React, { useState } from "react";
import NavImg from "../assets/nav image.svg"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import "../Styles/Navbar.css";
const NavBar = () => {
  return (
    <>
     

<Navbar bg="white" expand="lg" className="fixed-top shadow-lg">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={NavImg} alt="Logo" className="navbar-logo" />
          <span className="navbar-brand">JohnDev,</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="home-link">Home</Nav.Link>
            <Nav.Link href="#projects">Portfolio</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#testimonial">Testimonials</Nav.Link>
          </Nav>
          <a href="#contact" className=' text-decoration-none btn  contact-button'>Contact Me</a>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;