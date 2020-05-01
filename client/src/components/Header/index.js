import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import Logo from "../../gigitAssets/images/logo-w-min.png";
import { useAuth0 } from "../../react-auth0-spa";


function Header() {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
                    <Nav.Link href="/account">Account</Nav.Link>
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                    )}
                    <p>{JSON.stringify(isAuthenticated)}</p>
                    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;