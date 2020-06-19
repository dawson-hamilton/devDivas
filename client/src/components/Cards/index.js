import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function Cards(props) {
  function onButtonClick(e) {
    console.log("button is clicked!");
    console.log(e);
    // send it to the local storage
    localStorage.setItem("gig", e);
  }
  let pathName = "/artists/" + props.title.split(' ')[0];
  return (
    <Card style={{ width: "18rem", margin: "25px" }} className="gigCards">
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <br />
        <Link
          to={pathName}
          className="gigCardBtn"
          onClick={() => {
            onButtonClick(props.title);
          }}
        >
          Book Appointment
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
