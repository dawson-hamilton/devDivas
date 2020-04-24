import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";

function Cards(props) {
    return (
        <Card style={{ width: '18rem', margin: '25px' }}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button style={{ marginLeft: "10px" }} variant="primary" href={props.href}>Book Appointment</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards;