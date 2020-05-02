<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, {useState, Component, useEffect} from "react";
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
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
<<<<<<< HEAD
import Loading from "../components/Loading/Loading";
import { useAuth0 } from "../react-auth0-spa";



class GIGSETUP extends Component {

    // use state for all imputs
    state = {

    };
    // create calendar change function
    handleCalendarChange = e => {
        this.setState({
            email: "replace@gmail.com",
            date: e
        });
    };
    handleStartTimeChange = (e, unique) => {
        this.setState({
            [unique]: e
        });
    };

    // add handleInput change function
    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        this.setState({

            [name]: value

        });
    };
=======
import { useAuth0 } from "../react-auth0-spa";


>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa

function GIGSETUP() {
    // getting user date
    const { loading, user } = useAuth0();
    // setting up state with useState
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState();
    const [date, setDate] = useState("");
    const [addOne, setAddOne] = useState("");
    const [addTwo, setAddTwo] = useState("");
    const [city, setCity] = useState("");
    const [endTime, setEndTime] = useState("");
    const [startTime, setStartTime] = useState("");
    const [usState, setUsState] = useState("");
    const [zip, setZip] = useState("");
    const [userNotes, setUserNotes] = useState("");

    setEmail(user.email);


    // use state for all imputs
    var state = {
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
    useEffect(() => {
        handleFormSubmit();
      });
    
    
    const handleFormSubmit = e => {
        console.log("form submitted!")
        e.preventDefault();
<<<<<<< HEAD
        // API call to get email and username from auth0

=======
        
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa

        API.saveGig(state)
            .then(res => ({
                result: res.data

            }))
            .catch(err => console.log(err))
<<<<<<< HEAD
        this.setState({
            // setting the state back to empty strings once submited
        });
        console.log(this.state);

    };


    render() {

=======
            this.setState({
                // setting the state back to empty strings once submited
            });
            console.log(state);
    };


>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa

        return (
            <Container fluid>
                <br/>
                <Row className="datePicker">
                    <Col size="md-5 sm-12"></Col>
                    <Col size="md-2 sm-12">
                        <h1>Please Enter Name</h1>
                        <br />
                        <Info
                        setName = {setName}
                        />
                        <h1>Please Enter Valid Phone Number</h1>
                        <br />
                        <Info
                        setPhoneNum = {setPhoneNum}
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
<<<<<<< HEAD
                            handleCalendarChange={this.handleCalendarChange}
=======
                        setDate = {setDate}
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
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
<<<<<<< HEAD
                            uniqueID={"startTime"}
                            handleStartTimeChange={this.handleStartTimeChange}
=======
                        
                        setStartTime = {setStartTime}
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
                        />
                        <br />
                        <h3>To: </h3>
                        <br />
                        <Time
<<<<<<< HEAD
                            uniqueID={"endTime"}
                            handleStartTimeChange={this.handleStartTimeChange}
=======
                       
                        setEndTime = {setEndTime}
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
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
<<<<<<< HEAD
                            handleInputChange={this.handleInputChange}
=======
                        setAdd = {setAddOne}
                        setAdd = {setAddTwo}
                        setUsState = {setUsState}
                        setCity = {setCity}
                        setZip = {setZip}
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
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
<<<<<<< HEAD
                            handleInputChange={this.handleInputChange}
=======
                         setUserNotes = {setUserNotes}
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
                        />
                    </Col>
                    <Col size="md-5 sm-12"></Col>
                </Row>
                <Row>
                    <Col size="md-2 sm-12"></Col>
                    <Col size="md-8 sm-12">
                        <Button variant="success" type="submit" onClick={this.handleFormSubmit} style={{ width: "350px", height: "50px" }}>GIG IT!</Button>{' '}
                    </Col>
                    <Col size="md-2 sm-12"></Col>
                </Row>
                <br />
            </Container>
        );
<<<<<<< HEAD
    }

=======

    
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
}

export default GIGSETUP;


