import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PurchasesSidebar from "./PurchasesSidebar.js"
const NavBar = () => {
  const logout = () => localStorage.setItem("token", "");

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    const token = localStorage.getItem("token");

    if (token) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/#/">Test-Front</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#/login">Login</Nav.Link>
              <Nav.Link href="/#/purchases">Purchases</Nav.Link>
              <Nav.Link role="button" onClik={handleShow}>Cart (Sidebar)</Nav.Link>
              <Nav.Link role="button" onClick={logout}>Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <PurchasesSidebar show={show} handleClose={handleClose} />


    </div>
  );
};

export default NavBar;
