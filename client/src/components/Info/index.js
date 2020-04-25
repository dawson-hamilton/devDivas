import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";

function Info() {
    return (
        <div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="email" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone Number: </Form.Label>
                <Form.Control type="password" placeholder="Enter Phone Number" />
            </Form.Group>
        </div>
    );
}

export default Info;