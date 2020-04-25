import React, {Component} from "react";
import Calender from "../components/Calender";
import { Container, Col, Row } from "../components/Grid";
import "../components/Calender/style.css";
import Time from "../components/Time";
import Address from "../components/Address";
import Comment from "../components/Comment";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import API from "../utils/API";

class GIGSETUP extends Component {
    // use state for all imputs
    state = {
        
    };
    // create calendar change function
    handleCalendarChange = e => {
        this.setState({
            email: "replace@gmail.com",
            date:e
        });
    };
    handleStartTimeChange = (e, unique) => {
        this.setState({
            [unique]:e
        });
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
        // API call to get email and username from auth0
        

        API.saveGig(this.state)
            .then(res => ({
                result: res.data
                
            }))
            .catch(err => console.log(err))
            this.setState({
                // setting the state back to empty strings once submited
            });
            console.log(this.state);

    };


    render(){
        return (
            <Container fluid>
                <br />
                <Row className="datePicker">
                    <Col size="md-5 sm-12"></Col>
                    <Col size="md-2 sm-12">
                        <h1>Date:</h1>
                        <br />
                        <Calender
                        handleCalendarChange = {this.handleCalendarChange}
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
                        uniqueID={"startTime"}
                        handleStartTimeChange = {this.handleStartTimeChange}
                        />
                        <br />
                        <h3>To: </h3>
                        <br />
                        <Time
                        uniqueID={"endTime"}
                        handleStartTimeChange = {this.handleStartTimeChange}
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
                        handleInputChange = {this.handleInputChange}
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
                         handleInputChange = {this.handleInputChange}
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
    }
    
}

export default GIGSETUP;


