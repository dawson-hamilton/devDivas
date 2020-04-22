import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/gigs">Gigs</Nav.Link>
                <Nav.Link href="/accout">Account</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;