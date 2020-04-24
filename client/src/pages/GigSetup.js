import React from "react";
import Calender from "../components/Calender";
import { Container, Col, Row } from "../components/Grid";
import "../components/Calender/style.css";
import Time from "../components/Time";
import Address from "../components/Address";
import Comment from "../components/Comment";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

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
            <Row>
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Times: </h1>
                    <br />
                    <h3>From: </h3>
                    <br />
                    <Time />
                    <br />
                    <h3>To: </h3>
                    <br />
                    <Time />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Address: </h1>
                    <Address />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <br />
            <Row>
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Comment for the Gigger: </h1>
                    <Comment />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <Row>
                <Col size="md-2 sm-12"></Col>
                <Col size="md-8 sm-12">
                    <Button variant="success" style={{ width: "350px", height: "50px" }}>GIG IT!</Button>{' '}
                </Col>
                <Col size="md-2 sm-12"></Col>
            </Row>
            <br />
        </Container>
    );
}

export default GIGSETUP;