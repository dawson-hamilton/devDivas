import React from 'react';
import "../components/Cards/style.css";
import { Container, Row, Col } from "../components/Grid";
import Cards from "../components/Cards";

import BandImg from "../gigitAssets/images/band-min.png";
import ComedyImg from "../gigitAssets/images/comedy-min.png";
import DjImg from "../gigitAssets/images/dj-min.png";
import MagicImg from "../gigitAssets/images/magic-min.png";
import SantaImg from "../gigitAssets/images/santa-min.png";
import TheaterImg from "../gigitAssets/images/theater-min.png";
import Logo from "../gigitAssets/images/logo-w-min.png";
import Loading from "../components/Loading/Loading";
import { useAuth0 } from "../react-auth0-spa";
function GIGS() {

    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <Loading />;
    }

    return (
        <Container>
            <br />
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
            <Row>
                <Col size="md-2">
                    <Cards
                        title="Band Gigs"
                        description="Need a band for an event you are hosting?"
                        src={BandImg}
                        
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="DJ Gigs"
                        description="Need a DJ for an event you are hosting?"
                        src={DjImg}
                        
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="Theater Gigs"
                        description="Need a theater preformance for an event you are hosting?"
                        src={TheaterImg}
                        
                    />
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Cards
                        title="Santa Gigs"
                        description="Need a santa for an event you are hosting?"
                        src={SantaImg}
                       
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="Magic Gigs"
                        description="Need a magician for an event you are hosting?"
                        src={MagicImg}
                        
                    />
                </Col>
                <Col size="md-2"></Col>
                <Col size="md-2">
                    <Cards
                        title="Comedy Gigs"
                        description="Need a comedian for an event you are hosting?"
                        src={ComedyImg}
                    
                    />
                </Col>
            </Row>
        </Container>
    )
};

export default GIGS;