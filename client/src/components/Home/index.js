import React from "react";
import "./style.css";
import { Container } from "../Grid";
import Logo from "../../gigitAssets/images/logo-green-min.png";

function Home() {
    return (
        <Container>
            <br />
            <br />
            <div className="main-landing">
                <div className="overlay">
                    <div className="overlay-elements">
                        <img className="logo" src={Logo} alt="logo" />
                        <h1>Welcome to Gigit!</h1>
                        <p>Why Gigit?</p>
                        <p>Gigit is a third party application that our so called "giggers" can use to make their scheduling lives easier.
                        This application makes not only their lives easier but also yours. When you have any sort of gig that you need scheduled you
                        can now go to one place that has all kinds of gigs for your gigging need.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;