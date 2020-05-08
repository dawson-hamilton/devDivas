import React, { useState } from "react";
import Calender from "../components/Calender";
import { Container, Col, Row } from "../components/Grid";
import "../components/Calender/style.css";
import Time from "../components/Time";
import Address from "../components/Address";
import Comment from "../components/Comment";
import Info from "../components/Info";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import API from "../utils/API";
import { useAuth0 } from "../react-auth0-spa";



function GIGSETUP() {
    // getting user date
    const { loading, user } = useAuth0();
    // setting up state with useState
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [date, setDate] = useState("");
    const [addOne, setAddOne] = useState("");
    const [addTwo, setAddTwo] = useState("");
    const [city, setCity] = useState("");
    const [endTime, setEndTime] = useState("");
    const [startTime, setStartTime] = useState("");
    const [usState, setUsState] = useState("");
    const [zip, setZip] = useState("");
    const [userNotes, setUserNotes] = useState("");

    let email = user.email;
    // grab from local storage
    var gigName = localStorage.getItem("gig");



    // use state for all imputs
    var state = {
        gigName,
        name,
        phoneNum,
        email,
        date,
        addOne,
        addTwo,
        city,
        endTime,
        startTime,
        usState,
        zip,
        userNotes
    };


    const handleFormSubmit = e => {
        e.preventDefault();
        console.log("form submitted!")


        API.saveGig(state)
            .then(res => ({
                result: res.data

            }))
            .catch(err => console.log(err))

        console.log(state);
    };



    return (
        <Container fluid>
            <br />
            <Row className="datePicker">
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Please Enter Name</h1>
                    <br />
                    <Info
                        setName={setName}
                        setPhoneNum={setPhoneNum}
                    />


                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <br />
            <Row className="datePicker">
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Date:</h1>
                    <br />
                    <Calender
                        setDate={setDate}
                    />
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
                    <Time
                        start="start"
                        setStartTime={setStartTime}
                    />
                    <br />
                    <h3>To: </h3>
                    <br />
                    <Time

                        setEndTime={setEndTime}
                    />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Address: </h1>
                    <Address
                        setAddOne={setAddOne}
                        setAddTwo={setAddTwo}
                        setUsState={setUsState}
                        setCity={setCity}
                        setZip={setZip}
                    />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <br />
            <Row>
                <Col size="md-5 sm-12"></Col>
                <Col size="md-2 sm-12">
                    <h1>Comment for the Gigger: </h1>
                    <Comment
                        setUserNotes={setUserNotes}
                    />
                </Col>
                <Col size="md-5 sm-12"></Col>
            </Row>
            <Row>
                <Col size="md-2 sm-12"></Col>
                <Col size="md-8 sm-12">
                    <Button variant="success" type="submit" onClick={handleFormSubmit} style={{ width: "350px", height: "50px" }}>GIG IT!</Button>{' '}
                </Col>
                <Col size="md-2 sm-12"></Col>
            </Row>
            <br />
        </Container>
    );


}

export default GIGSETUP;


