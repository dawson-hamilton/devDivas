import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import Logo from "../../gigitAssets/images/logo-w-min.png";
import { useAuth0 } from "../../react-auth0-spa";



function Header() {


    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
            <Navbar.Brand href="/gigs">
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

                    {!isAuthenticated && (
                        <button className="btn btn-dark" onClick={() => loginWithRedirect({})}>Log in</button>
                    )}
                    {isAuthenticated && <button className="btn btn-dark" onClick={() => logout()}>Log out</button>}

                    {isAuthenticated && (
                        <span>
                            <Link to="/gigs" className="headerLinks">Home</Link>&nbsp;
                            <Link to="/profile" className="headerLinks">Profile</Link>
                        </span>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;