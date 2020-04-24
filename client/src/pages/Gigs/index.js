import React from 'react';
import "./style.css";

import BandImg from "../../gigitAssets/images/band-min.png";
import ComedyImg from "../../gigitAssets/images/comedy-min.png";
import DjImg from "../../gigitAssets/images/dj-min.png";
import MagicImg from "../../gigitAssets/images/magic-min.png";
import SantaImg from "../../gigitAssets/images/santa-min.png";
import TheaterImg from "../../gigitAssets/images/theater-min.png";
import Logo from "../../gigitAssets/images/logo-w-min.png";



function GIGS() {
    return (
        <div>
            <div className="container">
                <div className="main-landing">
                    <div className="overlay">
                        <div className="overlay-elements">
                            <img className="logo" src={Logo} alt="logo" />
                            <h1>Welcome to Gigit!</h1>
                            <p>Find local talent, select
                            Gigs, get the entertainment you need for your special occasion!</p>
                        </div>
                    </div>
                </div>
                <div className="section-divider">
                    <h2>Select a gig, choose a time and date, then Gigit!</h2>
                </div>
                <div className="card-section">
                    {/* card */}
                    <div className="shadow card-holder">
                        <a href="/setup" className="main-card">
                            <div className="image-holder">
                                <img className="card-img" src={BandImg} alt="Pick a Band gig" />
                            </div>
                            <div className="card-text">
                                <h3>Santa Gig</h3>
                            </div>
                        </a>
                    </div>
                    {/* card */}
                    <div className="shadow card-holder">
                        <a href="/setup" className="main-card">
                            <div className="image-holder">
                                <img className="card-img" src={DjImg} alt="Pick a D-j gig" />
                            </div>
                            <div className="card-text">
                                <h3>Santa Gig</h3>
                            </div>
                        </a>
                    </div>
                    {/* card */}
                    <div className="shadow card-holder">
                        <a href="/setup" className="main-card">
                            <div className="image-holder">
                                <img className="card-img" src={SantaImg} alt="Pick a santa gig" />
                            </div>
                            <div className="card-text">
                                <h3>Santa Gig</h3>
                            </div>
                        </a>
                    </div>
                    {/* card */}
                    <div className="shadow card-holder">
                        <a href="/setup" className="main-card">
                            <div className="image-holder">
                                <img className="card-img" src={TheaterImg} alt="Pick a theater gig" />
                            </div>
                            <div className="card-text">
                                <h3>Santa Gig</h3>
                            </div>
                        </a>
                    </div>
                    {/* card */}
                    <div className="shadow card-holder">
                        <a href="/setup" className="main-card">
                            <div className="image-holder">
                                <img className="card-img" src={MagicImg} alt="Pick a magic gig" />
                            </div>
                            <div className="card-text">
                                <h3>Santa Gig</h3>
                            </div>
                        </a>
                    </div>
                    {/* card */}
                    <div className="shadow card-holder">
                        <a href="/setup" className="main-card">
                            <div className="image-holder">
                                <img className="card-img" src={ComedyImg} alt="Pick a comedy gig" />
                            </div>
                            <div className="card-text">
                                <h3>Santa Gig</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default GIGS;