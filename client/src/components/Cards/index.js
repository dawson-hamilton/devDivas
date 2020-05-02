import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Cards(props) {
    return (
        <Card style={{ width: '18rem', margin: '25px' }} className="card">
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
<<<<<<< HEAD
                <Link to={props.to}>Book Appointment</Link>
=======
                <Link to="/gig-setup"><Button style={{ marginLeft: "10px" }} variant="primary">Book Appointment</Button></Link>
>>>>>>> a5695ced9a80fd352f6c5e644dd40fee8ea97afa
            </Card.Body>
        </Card>
    );
}

export default Cards;