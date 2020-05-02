import React from "react";
import "./style.css";
import { Container } from "../Grid";
import Logo from "../../gigitAssets/images/logo-green-min.png";

function Welcome() {
    return (
        <Container>
            <br />
            <br />
            <div className="main-landing">
                <div className="overlay">
                    <div className="overlay-elements">
                        <img className="logo" src={Logo} alt="logo" />
                        <h1>Welcome to Gigit!</h1>
                        <p>Find local talent, select
                        Gigs, get the entertainment you need for your special occasion!
                        </p>
                        <p>click on login above to get giging!</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Welcome;