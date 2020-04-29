import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./style.css";

function ProfileCard(props) {
    return (
        <Card style={{ width: '18rem' }} className="card">
            <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
                <Card.Text>
                    {props.comment}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Name: </strong>{props.name}</ListGroupItem>
                <ListGroupItem><strong>Number: </strong>{props.number}</ListGroupItem>
                <ListGroupItem><strong>Date: </strong>{props.date}</ListGroupItem>
                <ListGroupItem><strong>From: </strong>{props.fromTime}</ListGroupItem>
                <ListGroupItem><strong>To: </strong>{props.toTime}</ListGroupItem>
            </ListGroup>
            <Card.Body className="body">
                <button className="btn button">Cancel Gig</button>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;