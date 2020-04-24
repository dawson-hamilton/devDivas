import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import Logo from "../../gigitAssets/images/logo-w-min.png";

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="auto"
                    height="40"
                    className="d-inline-block align-top"
                    alt="gig it logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/gigs">Gigs</Nav.Link>
                    <Nav.Link href="/accout">Account</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;