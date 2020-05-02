import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";

function Cards(props) {
    return (
        <Card style={{ width: '18rem', margin: '25px' }} className="card">
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Link to="/gig-setup"><Button style={{ marginLeft: "10px" }} variant="primary">Book Appointment</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Cards;