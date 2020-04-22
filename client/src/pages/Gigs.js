import React from 'react';
import "../components/Cards/style.css";
import { Container, Row, Col } from "../components/Grid";
import Cards from "../components/Cards";

import BandImg from "../gigitAssets/images/band.png";
import ComedyImg from "../gigitAssets/images/comedy.png";
import DjImg from "../gigitAssets/images/dj.png";
import MagicImg from "../gigitAssets/images/magic.png";
import SantaImg from "../gigitAssets/images/santa.png";
import TheaterImg from "../gigitAssets/images/theater.png";
// import Logo from "../gigitAssets/images/logo-w.png";



function GIGS() {
    return (

        <Container>
            <div className="main-landing">
                <div className="overlay">
                    <div className="overlay-elements">
                        <img className="logo" src="./logo-w.png" alt="logo" />
                        <h1>Welcome to Gigit!</h1>
                        <p>Find local talent, select
                            Gigs, get the entertainment you need for your special occasion!</p>
                    </div>
                </div>
            </div>
            <div className="section-divider">
                <h2>Select a gig, choose a time and date, then Gigit!</h2>
            </div>
            <Row>
                <Col size="md-2">
                    <Cards
                        title="Band Gigs"
                        description="Need a band for an event you are hosting? Click the button below to book an appoinment!"
                        src={BandImg}
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="DJ Gigs"
                        description="Need a DJ for an event you are hosting? Click the button below to book an appoinment!"
                        src={DjImg}
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="Theater Gigs"
                        description="Need a theater preformance for an event you are hosting? Click the button below to book an appoinment!"
                        src={TheaterImg}
                    />
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Cards
                        title="Santa Gigs"
                        description="Need a santa for an event you are hosting? Click the button below to book an appoinment!"
                        src={SantaImg}
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="Magic Gigs"
                        description="Need a magician for an event you are hosting? Click the button below to book an appoinment!"
                        src={MagicImg}
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="Comedy Gigs"
                        description="Need a comedian for an event you are hosting? Click the button below to book an appoinment!"
                        src={ComedyImg}
                    />
                </Col>
            </Row>
        </Container>

        // <div>
        //     <div className="card-section">
        //         {/* card */}
        //         <div className="shadow card-holder">
        //             <a href="/setup" className="main-card">
        //                 <div className="image-holder">
        //                     <img className="card-img" src={BandImg} alt="Pick a Band gig" />
        //                 </div>
        //                 <div className="card-text">
        //                     <h3>Santa Gig</h3>
        //                 </div>
        //             </a>
        //         </div>
        //         {/* card */}
        //         <div className="shadow card-holder">
        //             <a href="/setup" className="main-card">
        //                 <div className="image-holder">
        //                     <img className="card-img" src={DjImg} alt="Pick a D-j gig" />
        //                 </div>
        //                 <div className="card-text">
        //                     <h3>Santa Gig</h3>
        //                 </div>
        //             </a>
        //         </div>
        //         {/* card */}
        //         <div className="shadow card-holder">
        //             <a href="/setup" className="main-card">
        //                 <div className="image-holder">
        //                     <img className="card-img" src={SantaImg} alt="Pick a santa gig" />
        //                 </div>
        //                 <div className="card-text">
        //                     <h3>Santa Gig</h3>
        //                 </div>
        //             </a>
        //         </div>
        //         {/* card */}
        //         <div className="shadow card-holder">
        //             <a href="/setup" className="main-card">
        //                 <div className="image-holder">
        //                     <img className="card-img" src={TheaterImg} alt="Pick a theater gig" />
        //                 </div>
        //                 <div className="card-text">
        //                     <h3>Santa Gig</h3>
        //                 </div>
        //             </a>
        //         </div>
        //         {/* card */}
        //         <div className="shadow card-holder">
        //             <a href="/setup" className="main-card">
        //                 <div className="image-holder">
        //                     <img className="card-img" src={MagicImg} alt="Pick a magic gig" />
        //                 </div>
        //                 <div className="card-text">
        //                     <h3>Santa Gig</h3>
        //                 </div>
        //             </a>
        //         </div>
        //         {/* card */}
        //         <div className="shadow card-holder">
        //             <a href="/setup" className="main-card">
        //                 <div className="image-holder">
        //                     <img className="card-img" src={ComedyImg} alt="Pick a comedy gig" />
        //                 </div>
        //                 <div className="card-text">
        //                     <h3>Santa Gig</h3>
        //                 </div>
        //             </a>
        //         </div>
        //     </div>
        // </div>
    )
};

export default GIGS;