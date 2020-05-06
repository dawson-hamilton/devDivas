import React from "react";
import "./style.css";
import { Container } from "../Grid";
import Logo from "../../gigitAssets/images/logo-green-min.png";
import HowTo from "../HowTo";
import Reviews from "../Reviews";
import SpecialReview from "../SpecialReview";

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
            <br />
            <br />
            <HowTo />
            <br />
            <h3>Dont just take our word for it, look at what people are saying. </h3>
            <br />
            <Reviews
                name="Dawson H."
                review="I booked a DJ gig with this guy and I couldnt be hppier with the playlist that he played! keep up the great work man!"
                date="August 28th, 2020"
                typeOfGig="DJ"
            />
            <br />
            <br />
            <Reviews
                name="Jacob D."
                review="Was the jolliest santa I have ever seen. 10/10 would recommend!"
                date="December 25th, 2019"
                typeOfGig="Santa"
            />
            <br />
            <br />
            <Reviews
                name="Tom R."
                review="Funniest guy out there! loved all the jokes and even told plety of political jokes like I asked!"
                date="March 3rd, 2020"
                typeOfGig="Comedian"
            />
            <br />
            <br />
            <SpecialReview
                name="Rockie B."
                review="Dude showed up late, pretty good magician because he made himself dissapear before the party was over..."
                date="April 1st, 2020"
                typeOfGig="Magician"
            />
            <br />
        </Container>
    );
}

export default Home;