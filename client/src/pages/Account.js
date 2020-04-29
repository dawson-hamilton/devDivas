import React from 'react';
import ProfileCard from "../components/ProfileCard";
import { Container, Col, Row } from "../components/Grid";

const ACCOUNT = () => {
    return (
        <Container>
            <br />
            <Row>
                <Col size="md-3"></Col>
                <Col size="md-6">
                    <h1>Dawson Hamilton</h1>
                    <h3>Currently Scheduled Gigs</h3>
                </Col>
                <Col size="md-3"></Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col size="md-2 sm-12">
                    <ProfileCard
                        title="Santa Gig"
                        comment="try to be extra jolly"
                        name="Dawson Hamilton"
                        number="385-274-8009"
                        date="04/28/2020"
                        fromTime="10:00am"
                        toTime="10:00pm"
                    />
                </Col>
                <Col size="md-2 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <ProfileCard
                        title="DJ Gig"
                        comment="please play gettin jiggy wit it"
                        name="Tom Ruff"
                        number="385-274-8009"
                        date="08/28/2020"
                        fromTime="12:00am"
                        toTime="05:00am"
                    />
                </Col>
                <Col size="md-2 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <ProfileCard
                        title="Comedy Gig"
                        comment="make sure you use lots of political jokes"
                        name="Jacob Dolph"
                        number="385-274-8009"
                        date="10/18/2020"
                        fromTime="03:00pm"
                        toTime="08:00pm"
                    />
                </Col>
            </Row>
        </Container>
    )
};

export default ACCOUNT;