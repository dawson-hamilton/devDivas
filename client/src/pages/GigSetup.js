import React, {Component} from "react";
import Calender from "../components/Calender";
import { Container, Col, Row } from "../components/Grid";
import "../components/Calender/style.css";
import Time from "../components/Time";
import Address from "../components/Address";
import Comment from "../components/Comment";
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { Button } from "react-bootstrap";
import API from "../utils/API";

class GIGSETUP extends Component {
    // use state for all imputs
    state = {
        setDate,
        result:{}
    };

    // add handleInput change function
    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        this.setState({
            [name]:value
        });
    };


    handleFormSubmit = e => {
        console.log("form submitted!")
        e.preventDefault();
        API.saveGig(this.state)
            .then(res => ({
                result: res.data
            }))
            .catch(err => console.log(err))
            this.setState({
                // setting the state back to empty strings once submited
            });
    };


    render(){
        return (
            <Container fluid>
=======
import { Button, Form } from "react-bootstrap";
import Info from "../components/Info";

function GIGSETUP() {
    return (
        <Container fluid>
            <Form>
                <br />
                <Row className="datePicker">
                    <Col size="md-5 sm-12"></Col>
                    <Col size="md-2 sm-12">
                        <h1>Personal Info: </h1>
                        <br />
                        <Info />
                    </Col>
                    <Col size="md-5 sm-12"></Col>
                </Row>
>>>>>>> a2c3884593de8afd339f960a05c2bf32f222e639
                <br />
                <Row className="datePicker">
                    <Col size="md-5 sm-12"></Col>
                    <Col size="md-2 sm-12">
                        <h1>Date:</h1>
                        <br />
<<<<<<< HEAD
                        <Calender
                        name="setDate"
                        value={this.state.setDate}
                        onChange={this.handleInputChange}
                        />
=======
                        <Calender />
>>>>>>> a2c3884593de8afd339f960a05c2bf32f222e639
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
<<<<<<< HEAD
                        <Time
                        name="time"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        />
=======
                        <Time />
>>>>>>> a2c3884593de8afd339f960a05c2bf32f222e639
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
<<<<<<< HEAD
            </Container>
        );
    }
    
=======
            </Form>
        </Container>
    );
>>>>>>> a2c3884593de8afd339f960a05c2bf32f222e639
}

export default GIGSETUP;