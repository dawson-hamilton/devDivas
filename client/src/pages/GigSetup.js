import React from "react";
import Calender from "../components/Calender";
import { Container, Col, Row } from "../components/Grid";
import "../components/Calender/style.css";
import Time from "../components/Time";

function GIGSETUP() {
    return (
        <Container fluid>
            <br />
            <Row className="datePicker">
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Date:</h1>
                    <br />
                    <Calender />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Times: </h1>
                    <br />
                    <h3>From: </h3>
                    <Time />
                    <h3>To: </h3>
                    <Time />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
        </Container>
    );
}

export default GIGSETUP;